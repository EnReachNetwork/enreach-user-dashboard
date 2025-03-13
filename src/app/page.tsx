"use client";

import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "@/app/signin/page";
import backendApi from "@/lib/api";
import { useShowParamsError } from "@/hooks/useShowParamsError";
import { useRouter } from "next/navigation";
import ADashboard from "@/components/ADashboard";

export default function Page() {
  const { user } = useContext(AuthContext);
  backendApi.setAuth(user?.token);
  useShowParamsError();

  return user?.token || user?.accessToken ? <ADashboard /> : <Login />;
}
