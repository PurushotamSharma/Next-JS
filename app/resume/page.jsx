import { redirect } from "next/navigation";

/** Legacy route — permanent redirect configured in next.config.js as well */
export default function ResumePage() {
  redirect("/experience");
}
