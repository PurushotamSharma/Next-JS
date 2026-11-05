import Link from "next/link";
import { person } from "@/lib/person";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">
        <div className="space-y-3">
          <p className="text-xl font-semibold">
            {person.name}
            <span className="text-accent">.</span>
          </p>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm">
            {person.headline}
          </p>
          <p className="text-white/40 text-sm">{person.location.label}</p>
        </div>

        <div>
          <p className="text-sm text-white/40 mb-4">
            Navigate
          </p>
          <ul className="space-y-2">
            {person.footerNavigation.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm text-white/40 mb-4">
            Profiles
          </p>
          <ul className="space-y-2">
            {person.profiles.map((profile) => (
                <li key={profile.id}>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {profile.label}
                  </a>
                </li>
              ))}
          </ul>
          <p className="mt-6 text-sm text-white/50">
            <a
              href={`mailto:${person.emailPublic}`}
              className="hover:text-accent transition-colors"
            >
              {person.emailPublic}
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-white/35">
        © {year} {person.name}. Technical Product Manager.
      </div>
    </footer>
  );
}
