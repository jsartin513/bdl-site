import { redirect } from "next/navigation";

export default function Home() {
  redirect("/league");
  return null;
}
