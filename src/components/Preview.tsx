import { SiFacebook, SiGithub, SiInstagram, SiTiktok } from "react-icons/si";
import { SocialMediaLink } from "./Header/SocialMediaLink";

interface Link {
    name: string;
    url: string;
}

interface PreviewProps {
    name: string;
    github: string;
    linkedin: string;
    instagram: string;
    tiktok: string;
    facebook: string;
    links: Link[];
}

export const Preview = ({ name, github, linkedin, instagram, tiktok, facebook, links }: PreviewProps) => {
    return (
        <aside className="w-4/12 p-4">
            <div className="rounded border-8 p-4 max-w-lg mx-auto">
                <div className="flex flex-col gap-2 items-center">
                    <span className="block w-16 h-16 rounded-full bg-blue-900"></span>
                    <h1 className="font-bold">{name}</h1>
                </div>

                <ul className="flex gap-2 justify-center">
                    {github !== "" && (
                        <li>
                            <SocialMediaLink link={"https://github.com/" + github}>
                                <SiGithub />
                            </SocialMediaLink>
                        </li>
                    )}
                    {linkedin !== "" && (
                        <li>
                            <SocialMediaLink link={"https://linkedin.com/in/" + linkedin}>
                            in
                            </SocialMediaLink>
                        </li>
                    )}
                    {instagram !== "" && (
                        <li>
                            <SocialMediaLink link={"https://instagram.com/" + instagram}>
                                <SiInstagram />
                            </SocialMediaLink>
                        </li>
                    )}
                    {tiktok !== "" && (
                        <li>
                            <SocialMediaLink link={"https://tiktok.com/@" + tiktok}>
                                <SiTiktok />
                            </SocialMediaLink>
                        </li>
                    )}
                    {facebook !== "" && (
                        <li>
                            <SocialMediaLink link={"https://facebook.com/" + facebook}>
                                <SiFacebook />
                            </SocialMediaLink>
                        </li>
                    )}
                </ul>

                <ul className="mt-4 flex flex-col gap-2">
                    {links.map((link, index) => (
                        link.name !== "" && link.url !== "" && (
                            <li key={index}>
    
                               <a href={link.url}
                                 className="block text-center bg-gray-100 rounded px-4 py-2 hover:bg-gray-200">
                                 {link.name}
                            </a>
                            </li>
                        )
                    ))}
                </ul>
            </div>
        </aside>
    );
};