(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{22647:function(){},79391:function(){},81388:function(){},6778:function(e,t,r){Promise.resolve().then(r.bind(r,75449)),Promise.resolve().then(r.bind(r,19444)),Promise.resolve().then(r.bind(r,35802)),Promise.resolve().then(r.bind(r,8373)),Promise.resolve().then(r.bind(r,42351)),Promise.resolve().then(r.bind(r,50579)),Promise.resolve().then(r.bind(r,62670)),Promise.resolve().then(r.bind(r,19650)),Promise.resolve().then(r.bind(r,23857)),Promise.resolve().then(r.bind(r,69085)),Promise.resolve().then(r.bind(r,24714)),Promise.resolve().then(r.bind(r,60151)),Promise.resolve().then(r.bind(r,98909)),Promise.resolve().then(r.bind(r,42356)),Promise.resolve().then(r.bind(r,20777)),Promise.resolve().then(r.bind(r,72714)),Promise.resolve().then(r.bind(r,75473)),Promise.resolve().then(r.bind(r,40913)),Promise.resolve().then(r.bind(r,38937)),Promise.resolve().then(r.bind(r,52763)),Promise.resolve().then(r.bind(r,74488)),Promise.resolve().then(r.bind(r,31871)),Promise.resolve().then(r.bind(r,95347)),Promise.resolve().then(r.bind(r,56543)),Promise.resolve().then(r.bind(r,85353)),Promise.resolve().then(r.bind(r,46610)),Promise.resolve().then(r.bind(r,17075)),Promise.resolve().then(r.bind(r,10117)),Promise.resolve().then(r.bind(r,81581)),Promise.resolve().then(r.bind(r,74019)),Promise.resolve().then(r.bind(r,75005)),Promise.resolve().then(r.bind(r,40022)),Promise.resolve().then(r.bind(r,47982)),Promise.resolve().then(r.bind(r,23222)),Promise.resolve().then(r.bind(r,54869)),Promise.resolve().then(r.bind(r,23977)),Promise.resolve().then(r.bind(r,71305)),Promise.resolve().then(r.t.bind(r,86536,23)),Promise.resolve().then(r.t.bind(r,90457,23)),Promise.resolve().then(r.bind(r,58782)),Promise.resolve().then(r.t.bind(r,54327,23)),Promise.resolve().then(r.bind(r,80034))},58782:function(e,t,r){"use strict";r.d(t,{PageLayout:function(){return v}});var n=r(81210),s=r(79321),a=r(49755),o=r(36062),i=r(53179),c=r(60164),l=r(20337),d=r(44384),u=r(87106),m=r(65843);r(77422);let h=()=>{let e="dark",t="dark";return"light"!==localStorage.theme&&("theme"in localStorage||!window.matchMedia("(prefers-color-scheme: light)").matches)?(document.documentElement.classList.add("dark"),e="dark",t="dark"):(e="light",t="light"),"theme"in localStorage||(e="system"),{themeMode:e,theme:t}},g=(0,m.U)(e=>({...h(),setThemeMode:t=>e(()=>({themeMode:t})),setTheme:t=>e(()=>({theme:t}))}));u.EWX,u.Dq,u.pUp;var p=r(47048),f=r(23958);let b=new c.S({defaultOptions:{queries:{retry:!1}}});function w(e){let{children:t}=e;return g(),(0,n.jsx)(s.w,{className:"App  ",children:(0,n.jsx)(d.rg,{clientId:"425165933886-vpv32tvbhfeqfujnel0fdjm88kfn1lhn.apps.googleusercontent.com",children:(0,n.jsx)(l.aH,{client:b,children:(0,n.jsx)(i.Ho,{children:t})})})})}function v(e){let{children:t}=e,[r,s]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{r||s(!0)},[r]),r)?(console.log=function(){},console.error=function(){},console.warn=function(){},(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.x7,{richColors:!0,position:"top-right",offset:100,theme:"light",style:{"--width":"15rem"},toastOptions:{classNames:{toast:"rounded-xl bg-[#585858] border border-solid border-white/10 text-white/60 text-xs px-4 py-2",error:"!bg-[#FFD4D7] flex !items-start !pt-3 text-xs ",warning:"!bg-[#585858] !border-[#585858] !text-[#FFF] !gap-5 ",title:"!leading-[1.2]"}},icons:{error:(0,n.jsx)(p.FMH,{className:"text-[#FF3A3D] text-sm"}),warning:(0,n.jsx)(f.XvE,{className:"text-[#FFF] text-sm"})}}),(0,n.jsx)(w,{children:t})]})):null}},53179:function(e,t,r){"use strict";r.d(t,{Vo:function(){return u},Ho:function(){return g},Eu:function(){return p}});var n=r(81210),s=r(74572),a=r(36957);let o={beta:"EnreachExt_beta",staging:"EnreachExt_staging",prod:"EnreachExt"};function i(){return window[o[a.Vi]]}var c=r(76114),l=r(95258),d=r(49755);let u=(0,d.createContext)({login:async()=>{},setUser:()=>{},logout:()=>{}}),m="last-login-user",h=()=>{try{let e=localStorage.getItem(m);if(!e)return null;return JSON.parse(e)}catch(e){return console.error(e),null}},g=e=>{let{children:t}=e,r=(0,d.useRef)(!1),a=(0,l.useRouter)(),[o,g]=(0,d.useState)(h()),p=(0,l.useSearchParams)().get("redirect");console.info("redirect:",p);let f=e=>{var t,n;e?(r.current=!1,g(e),localStorage.setItem(m,JSON.stringify(e)),e.token&&(null===(n=i())||void 0===n||n.request({name:"setAccessToken",body:e.token}).catch(console.error)),a.push(p||"/")):(r.current=!0,g(null),localStorage.removeItem(m),null===(t=i())||void 0===t||t.request({name:"clearAccessToken"}).catch(console.error),a.push("/signin"))},b=async e=>{try{if(!e.email||!e.password)return;let t=await s.Z.loginApi(e);f(t)}catch(e){throw console.error(e),e}},w=(0,c.a)({queryKey:["QueryUserInfo",null==o?void 0:o.token],enabled:!!(null==o?void 0:o.token),queryFn:()=>s.Z.userInfo()});return(0,n.jsx)(u.Provider,{value:{user:o,login:b,logout:()=>{f()},setUser:f,queryUserInfo:w},children:t})},p=()=>(0,d.useContext)(u)},77422:function(e,t,r){"use strict";r.d(t,{C:function(){return u},m:function(){return d}});var n=r(81210),s=r(92924),a=r(81777),o=r(76222),i=r(41551),c=r(47060),l=r(85947);function d(e){let{children:t,contentProps:r,bodyProps:i,...c}=e;return(0,n.jsx)(s.R,{isDismissable:!1,backdrop:"blur",classNames:{backdrop:"backdrop-blur",wrapper:"py-5"},hideCloseButton:!0,...c,children:(0,n.jsx)(a.A,{className:"w-[22.5rem] p-6 bg-[#404040] rounded-3xl !my-auto",...r||{},children:(0,n.jsx)(o.I,{className:"flex flex-col justify-start items-center w-full gap-6 p-0",...i||{},children:t})})})}function u(e){let{tit:t,children:r,contentProps:d,bodyProps:u,className:m,...h}=e;return(0,n.jsx)(s.R,{hideCloseButton:!0,backdrop:"blur",className:m,classNames:{backdrop:"backdrop-blur-[6px]",wrapper:"py-5"},...h,children:(0,n.jsx)(a.A,{className:(0,i.cn)("w-[31.25rem] bg-[#404040] gap-6 p-6 rounded-3xl !my-auto",m),...d||{},children:e=>(0,n.jsxs)(n.Fragment,{children:["function"==typeof e||t&&(0,n.jsxs)(c.k,{className:"justify-between p-0  ",children:[t&&(0,n.jsx)("span",{className:"text-base font-semibold text-left text-white",children:t}),"function"==typeof e&&(0,n.jsx)("div",{className:"p-0 rounded-full w-6 h-6 flex justify-center items-center text-xs cursor-pointer bg-white/10 hover:bg-white/30",onClick:e,children:(0,n.jsx)(l.q5L,{})})]}),(0,n.jsx)(o.I,{className:"flex flex-col justify-start items-center w-full gap-6 p-0",...u||{},children:r})]})})})}},74568:function(e,t,r){"use strict";r.d(t,{Ih:function(){return o},if:function(){return i}});var n=r(13910),s=r.n(n),a=r(28853);function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=s().toNumber(e);return r?(0,a.Z)(r).format({mantissa:2,trimMantissa:!1,average:r>=1e3}).toUpperCase():t}function i(e){return(0,a.Z)(Math.max(s().toNumber(e||"1"),1)).format({mantissa:1,trimMantissa:!1})}},80034:function(e,t,r){"use strict";r.d(t,{default:function(){return p}});var n=r(81210),s=r(95226),a=r(89670);let o="7dbfe391a389f1dd5555a5d31c90f523";if(!o)throw Error("Project ID is not defined");let i=[a.RJ0,a.yXc],c=new s.K({ssr:!0,projectId:o,networks:i});c.wagmiConfig;var l=r(60164),d=r(20337),u=r(53668);r(49755);var m=r(45283),h=r(91365);let g=new l.S;(0,u.cz)({adapters:[c],projectId:o,networks:[a.RJ0,a.yXc,a.pLm,a.ueV,a.v4o,a.yue],defaultNetwork:a.RJ0,metadata:{name:"EnReach",description:"AppKit Example",url:"https://reown.com/appkit",icons:["https://assets.reown.com/reown-profile-pic.png"]},features:{analytics:!0}});var p=function(e){let{children:t,cookies:r}=e,s=(0,m.jx)(c.wagmiConfig);return(0,n.jsx)(h.F,{config:c.wagmiConfig,initialState:s,children:(0,n.jsx)(d.aH,{client:g,children:t})})}},74572:function(e,t,r){"use strict";var n=r(80957),s=r(36957),a=r(13910),o=r.n(a),i=r(74568),c=r(36062);let l={beta:"https://dev-api.enreach.network/api",staging:"https://staging-api-1.enreach.network/api",prod:"https://api.enreach.network/api"}[s.Vi],d="/edgeNode/node/",u=n.default.create({baseURL:l,headers:{"Content-Type":"application/json"}});u.interceptors.request.use(e=>{let t=localStorage.getItem("last-login-user"),{token:r=""}=JSON.parse(null!=t?t:"{}");return r&&(e.headers.Authorization="Bearer ".concat(r)),e},e=>Promise.reject(e)),u.interceptors.response.use(e=>e,e=>{console.log("asdasas",e);let{status:t=0,data:r}=e.response||{};switch(t){case 400:c.Am.error(r.message||"请求错误");break;case 401:c.Am.warning("登录过期，请重新登录"),window.location.href="/login";break;case 403:c.Am.error("没有权限访问");break;case 500:c.Am.error("服务器错误，请稍后再试");break;default:c.Am.error(r.message||"请求失败")}return Promise.reject(e.response.data)}),t.Z={loginApi:async e=>{let t=await u.post("/user/signIn",e);return console.log("responseresponse",t),t.data.data},loginByGoogleApi:async e=>(await u.post("/user/google/signIn",e)).data.data,verifyRegisterCode:async(e,t)=>(await u.post("/user/verify/".concat(e,"/").concat(t))).data.data,resendRegisterVerifyCode:async e=>(await u.post("/user/verify/".concat(e,"/resend")),!0),loginSetReferralApi:async e=>(await u.post("/user/referral/by",e)).data.data,registerApi:async e=>(await u.post("/user/signUp",{...e})).data.data,registerByGoogleApi:async e=>(await u.post("/user/google/signUp",{accessToken:e})).data.data,userInfo:async()=>{let e=await u.get("/user/profile"),t=e.data.data.point;return o().keys(t).forEach(e=>{t[e]=o().toNumber(t[e])}),t.network=o().toNumber((0,i.if)(e.data.data.stat.extraBoost))*t.network,t.total=t.referral+t.network,e.data.data},sendResetPassword:async e=>(await u.post("/user/password/reset/send",{email:e}),!0),resetPassword:async e=>(await u.post("/user/password/reset",e),!0),userUpdate:async e=>(await u.post("/user/profile/update",e),!0),userReward:async()=>(await u.get("/user/reward")).data.data,getAccessToken:async()=>(await u.get("/user/accessToken")).data.data.accessToken,getCurrentEdgeNode:async()=>(await u.get("".concat(d,"stat"))).data.data,getCurrentEdgeNodeRewards:async()=>(await u.get("".concat(d,"rewards"))).data.data,getCurrentEdgeNodeRewardsTrending:async()=>(await u.get("".concat(d,"rewards/trending"))).data.data,getDeviceStatusInfo:async(e,t)=>{let r=t?"".concat(d).concat(e,"/stat/?deviceType=").concat(t):"".concat(d).concat(e,"/stat");return(await u.get(r)).data.data},getRegions:async()=>(await u.get("edgeNode/regions")).data.data,bindingConfig:async(e,t,r,n)=>(await u.post("".concat(d).concat(e,"/bind?deviceType=").concat(n),{nodeName:t,regionCode:r})).data,getNodeList:async()=>(await u.get("".concat(d,"list"))).data.data,getNodeInfoByNodeId:async e=>(await u.get("".concat(d).concat(e,"/details"))).data.data,unbingDevice:async e=>(await u.post("".concat(d).concat(e,"/unbind"))).data.data}},36957:function(e,t,r){"use strict";r.d(t,{Vi:function(){return n}}),r(45303).env.NEXT_PUBLIC_BASE_PATH;let n="beta"},54327:function(){}},function(e){e.O(0,[5697,3686,4242,7495,5863,9720,5411,6717,8583,1055,4292,4033,4734,5444,110,790,6974,8403,6331,1744],function(){return e(e.s=6778)}),_N_E=e.O()}]);