"use client";

import { RecoilRoot } from "recoil";

export default function AppDataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
