import { useState } from "react";
import { Main } from "./Main";
import { Preview } from "./Preview";

interface Link {
    name: string;
    url: string;
}

export const EditPage = () => {
    const [name, setName] = useState("Stellar");
    const [links, setLinks] = useState<Link[]>([]);
    const [github, setGithub] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [instagram, setInstagram] = useState("");
    const [tiktok, setTiktok] = useState("");
    const [facebook, setFacebook] = useState("");

    const handleAddLink = () => {
        setLinks([...links, { name: "", url: "" }]);
    };

    const handleLinkChange = (index: number, field: string, value: string) => {
        const updatedLinks = [...links];
        updatedLinks[index] = { ...updatedLinks[index], [field]: value };
        setLinks(updatedLinks);
    };

    return (
        <div>
            <div className="container mx-auto flex">
                <Main
                    name={name} setName={setName}
                    github={github} setGithub={setGithub}
                    linkedin={linkedin} setLinkedin={setLinkedin}
                    instagram={instagram} setInstagram={setInstagram}
                    tiktok={tiktok} setTiktok={setTiktok}
                    facebook={facebook} setFacebook={setFacebook}
                    links={links}
                    handleLinkChange={handleLinkChange}
                    handleAddLink={handleAddLink}
                />
                <Preview
                    name={name}
                    github={github}
                    linkedin={linkedin}
                    instagram={instagram}
                    tiktok={tiktok}
                    facebook={facebook}
                    links={links}
                />
            </div>
        </div>
    );
};