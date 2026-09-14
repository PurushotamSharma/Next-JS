import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { person } from "@/lib/person";

const iconMap = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  x: <FaTwitter />,
  instagram: <FaInstagram />,
};

const Social = ({ containerStyles, iconStyles }) => {
  const socials = person.profiles.filter((p) =>
    ["github", "linkedin", "x", "instagram"].includes(p.id)
  );

  return (
    <div className={containerStyles}>
      {socials.map((item) => (
        <Link
          key={item.id}
          href={item.url}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
        >
          {iconMap[item.id]}
        </Link>
      ))}
    </div>
  );
};

export default Social;
