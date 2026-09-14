import HomeClient from "./HomeClient";
import { buildMetadata } from "@/lib/seo";
import { person } from "@/lib/person";

export const metadata = buildMetadata({
  title: `${person.name} | ${person.title}`,
  description: person.shortDescription,
  path: "",
  absoluteTitle: true,
});

export default function Home() {
  return <HomeClient />;
}
