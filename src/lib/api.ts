import { LoginResult, SingUpResult, User, UserReward } from "@/types/user";
import axios from "axios";
import { ENV } from "./env";
import _ from "lodash";
import { fmtBoost } from "@/components/fmtData";
import { toast } from "sonner";

const API_MAP: { [k in typeof ENV]: string } = {
  beta: "https://dev-api.enreach.network/api",
  staging: "https://staging-api-1.enreach.network/api",
  prod: "https://api.enreach.network/api",
};

export const BASE_API = API_MAP[ENV];

const prefixUrl = "/edgeNode/node/";

const Api = axios.create({
  baseURL: BASE_API,
  headers: {
    "Content-Type": "application/json",
  },
});

export type RES<T> = {
  message: string;
  data: T;
};

Api.interceptors.request.use(
  (config) => {
    const result = localStorage.getItem("last-login-user");
    const { token = "" } = JSON.parse(result ?? "{}");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

Api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("asdasas", error);

    const { status = 0, data } = error.response;

    switch (status) {
      case 400:
        toast.error(data.message || "请求错误");
        break;
      case 401:
        toast.warning("登录过期，请重新登录");
        window.location.href = "/login";
        break;
      case 403:
        toast.error("没有权限访问");
        break;
      case 500:
        toast.error("服务器错误，请稍后再试");
        break;
      default:
        toast.error(data.message || "请求失败");
    }

    return Promise.reject(error.response.data);
  }
);

const backendApi = {
  loginApi: async (data: { email: string; password: string }) => {
    const response = await Api.post<RES<LoginResult>>("/user/signIn", data);
    console.log("responseresponse", response);
    return response.data.data;
  },

  loginByGoogleApi: async (data: { accessToken: string }) => {
    const response = await Api.post<RES<LoginResult>>(
      "/user/google/signIn",
      data
    );
    return response.data.data;
  },
  verifyRegisterCode: async (uid: string, code: string) => {
    const response = await Api.post<RES<LoginResult>>(
      `/user/verify/${uid}/${code}`
    );
    return response.data.data;
  },
  resendRegisterVerifyCode: async (uid: string) => {
    await Api.post<RES<undefined>>(`/user/verify/${uid}/resend`);
    return true;
  },

  loginSetReferralApi: async (data: {
    accessToken: string;
    referralCode?: string;
  }) => {
    const response = await Api.post<RES<LoginResult>>(
      "/user/referral/by",
      data
    );
    return response.data.data;
  },

  registerApi: async (data: {
    email: string;
    password: string;
    referralCode?: string;
  }) => {
    const response = await Api.post<RES<SingUpResult>>("/user/signUp", {
      ...data,
    });
    return response.data.data;
  },

  registerByGoogleApi: async (accessToken: string) => {
    const response = await Api.post<RES<SingUpResult>>("/user/google/signUp", {
      accessToken,
    });
    return response.data.data;
  },

  userInfo: async () => {
    const response = await Api.get<RES<User>>("/user/profile");
    const p = response.data.data.point;
    _.keys(p).forEach((key) => {
      p[key] = _.toNumber(p[key]);
    });
    // p.total = _.toNumber(fmtBoost(response.data.data.stat.extraBoost)) * p.total;
    p.network =
      _.toNumber(fmtBoost(response.data.data.stat.extraBoost)) * p.network;
    p.total = p.referral + p.network;
    return response.data.data;
  },
  sendResetPassword: async (email: string) => {
    await Api.post<RES<undefined>>("/user/password/reset/send", { email });
    return true;
  },

  resetPassword: async (data: {
    email: string;
    password: string;
    verifyCode: string;
  }) => {
    await Api.post<RES<undefined>>("/user/password/reset", data);
    return true;
  },

  userUpdate: async (data: {
    username?: string;
    disconnect?: { x?: boolean; tg?: boolean; discord?: boolean };
  }) => {
    await Api.post<RES<undefined>>("/user/profile/update", data);
    return true;
  },

  userReward: async () => {
    const response = await Api.get<RES<UserReward>>("/user/reward");
    return response.data.data;
  },

  getAccessToken: async () => {
    const response = await Api.get<RES<{ accessToken: string }>>(
      "/user/accessToken"
    );
    return response.data.data.accessToken;
  },

  getCurrentEdgeNode: async () => {
    const response = await Api.get(`${prefixUrl}stat`);
    return response.data.data;
  },

  getCurrentEdgeNodeRewards: async () => {
    const response = await Api.get(`${prefixUrl}rewards`);
    return response.data.data;
  },

  getCurrentEdgeNodeRewardsTrending: async () => {
    const response = await Api.get<RES<Nodes.TrendingList[]>>(
      `${prefixUrl}rewards/trending`
    );
    return response.data.data;
  },

  getDeviceStatusInfo: async (nodeId: string, deviceType?: "box" | "x86") => {
    const url = deviceType
      ? `${prefixUrl}${nodeId}/stat/?deviceType=${deviceType}`
      : `${prefixUrl}${nodeId}/stat`;
    const response = await Api.get<RES<Nodes.DevicesInfo>>(url);
    return response.data.data;
  },

  getRegions: async () => {
    const response = await Api.get(`edgeNode/regions`);
    return response.data.data;
  },

  bindingConfig: async (
    nodeId: string,
    nodeName: string,
    regionCode: string
  ) => {
    const response = await Api.post(`${prefixUrl}${nodeId}/bind`, {
      nodeName,
      regionCode,
    });
    console.log("responseresponse", response);

    return response.data;
  },

  getNodeList: async () => {
    const response = await Api.get<RES<Nodes.NodeInfoList[]>>(
      `${prefixUrl}list`
    );
    return response.data.data;
  },

  getNodeInfoByNodeId: async (nodeId?: string) => {
    const response = await Api.get<RES<Nodes.NodeInfoList>>(
      `${prefixUrl}${nodeId}/details`
    );
    return response.data.data;
  },

  unbingDevice: async (nodeId?: string) => {
    const response = await Api.post<RES<Nodes.NodeInfoList[]>>(
      `${prefixUrl}${nodeId}/unbind`
    );
    return response.data.data;
  },
};

export default backendApi;
