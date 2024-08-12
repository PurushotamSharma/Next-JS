import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/PurushotamSharma" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/purushotamsharma/" },
    { icon: <FaTwitter />, path: "https://twitter.com/Purushotam_0" }
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (<Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>

                );
            })}
        </div>
    );
}

export default Social;