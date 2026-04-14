import { Input } from "./Input";

interface Link {
    name: string;
    url: string;
}

interface EditFormProps {
    name: string;
    setName: (value: string) => void;
    github: string;
    setGithub: (value: string) => void;
    linkedin: string;
    setLinkedin: (value: string) => void;
    instagram: string;
    setInstagram: (value: string) => void;
    tiktok: string;
    setTiktok: (value: string) => void;
    facebook: string;
    setFacebook: (value: string) => void;
    links: Link[];
    onAddLink: () => void;
    onLinkChange: (index: number, field: string, value: string) => void;
}

export const EditForm = ({
    name, setName,
    github, setGithub,
    linkedin, setLinkedin,
    instagram, setInstagram,
    tiktok, setTiktok,
    facebook, setFacebook,
    links, onAddLink, onLinkChange
}: 

    EditFormProps) => {
    return (

        <main className="w-8/12 p-4">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

                <Input name="Nome" id="name" placeholder="Ex: João"
                value={name} onChange={(e) => setName(e.target.value)} />

                <Input name="GitHub" id="github" placeholder="Ex: ester-creater"
                value={github} onChange={(e) => setGithub(e.target.value)} />

                <div className="grid grid-cols-4 gap-4">
                    <Input name="LinkedIn" id="linkedin" placeholder="Ex: ester-creater"
                    value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />

                    <Input name="Instagram" id="instagram" placeholder="Ex: ester-creater"
                    value={instagram} onChange={(e) => setInstagram(e.target.value)} />

                    <Input name="TikTok" id="tiktok" placeholder="Ex: ester-creater"
                    value={tiktok} onChange={(e) => setTiktok(e.target.value)} />

                    <Input name="Facebook" id="facebook" placeholder="Ex: ester-creater"
                    value={facebook} onChange={(e) => setFacebook(e.target.value)} />

                </div>

                <div className="space-y-4">
                    {links.map((link, index) => (
                        <div className="flex gap-4" key={index}>
                            <Input name={"Link " + (index + 1)} id={"Link-" + index}
                            value={link.name} placeholder="Ex: Portfólio"
                            onChange={(e) => onLinkChange(index, "name", e.target.value)} />

                            <Input name="URL do Link" id={"link-url-" + index}
                            value={link.url} placeholder="Ex: https://meusite.com"
                            onChange={(e) => onLinkChange(index, "url", e.target.value)} />
                        </div>
                    ))}
                    <button className="bg-white rounded cursor-pointer uppercase px-4 py-2
                        hover:opacity-90 transition-opacity"
                        onClick={onAddLink}>
                        Adicionar Link
                    </button>
                </div>
            </form>
        </main>
    );
};