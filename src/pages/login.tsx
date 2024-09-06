"use client";

import { PageHead } from "@/components";
import { LoginPage } from "@/features";

export default function Login() {
  return (
    <>
      <PageHead title={"Login"} />
      <LoginPage />
    </>
  );
}
