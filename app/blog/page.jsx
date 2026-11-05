import { redirect } from "next/navigation";

/** Legacy route: the writing page lists every post */
export default function BlogPage() {
  redirect("/writing");
}
