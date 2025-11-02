import { redirect } from "next/navigation";
import { fallbackLocale } from "@/lib/i18n/settings";

export default function IndexRedirect() {
  redirect(`/${fallbackLocale}`);
}
