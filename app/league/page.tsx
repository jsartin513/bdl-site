"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LeagueRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/league/remix");
  }, [router]);

  return null;
}