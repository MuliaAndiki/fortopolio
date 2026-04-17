"use client";

import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store/index";
import { usePathname, useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import { useAppDispatch } from "@/hooks/dispatch/dispatch";
import { setCurrentUser } from "@/store/authSlice/authSlice";
import { APP_SESSION_COOKIE_KEY } from "@/config/cookies.config";
import type { userSchema } from "@/types/api";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (!currentUser?.user?.token) {
      const token = getCookie(APP_SESSION_COOKIE_KEY);
      if (token) {
        const hydratedUser = {
          user: { token: String(token) },
        } as unknown as userSchema;
        dispatch(setCurrentUser(hydratedUser));
      }
    }
  }, [currentUser, dispatch]);

  React.useEffect(() => {
    const isAuthPage =
      pathname?.startsWith("/login") ||
      pathname?.startsWith("/register") ||
      pathname?.startsWith("/home") ||
      pathname?.startsWith("/forgotPassword") ||
      pathname?.startsWith("/reset") ||
      pathname?.startsWith("/otp");

    const isAuthenticated = Boolean(currentUser?.user?.token);

    if (!isAuthenticated && !isAuthPage) {
      router.replace("/login");
      return;
    }

    if (isAuthenticated && isAuthPage) {
      // setUp
      // router.replace('/home');
      return;
    }
  }, [pathname, currentUser, router]);

  return <>{children}</>;
}
