import { Input } from "./Input";

interface Link {
  name: string;
  url: string;
}

interface MainProps {
  name: string;
  setName: (val: string) => void;
  github: string;
  setGithub: (val: string) => void;
  linkedin: string;
  setLinkedin: (val: string) => void;
  instagram: string;
  setInstagram: (val: string) => void;
  tiktok: string;
  setTiktok: (val: string) => void;
  facebook: string;
  setFacebook: (val: string) => void;
  links: Link[];
  handleLinkChange: (index: number, field: "name" | "url", value: string) => void;
  handleAddLink: () => void;
}

export const Main = (props: MainProps) => {
  return (
    <main className="w-8/12 p-4">
      <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
 
        <Input 
          name="Nome" 
          id="name" 
          placeholder="Ex: João" 
          value={props.name} 
          onChange={(e) => props.setName(e.target.value)} 
        />


        <Input 
          name="GitHub" 
          id="github" 
          placeholder="Ex: João" 
          value={props.github} 
          onChange={(e) => props.setGithub(e.target.value)} 
        />


        <div className="grid grid-cols-4 gap-4">
          <Input name="Linkedin" id="linkedin" value={props.linkedin} onChange={(e) => props.setLinkedin(e.target.value)} />
          <Input name="Instagram" id="instagram" value={props.instagram} onChange={(e) => props.setInstagram(e.target.value)} />
          <Input name="TikTok" id="tiktok" value={props.tiktok} onChange={(e) => props.setTiktok(e.target.value)} />
          <Input name="Facebook" id="facebook" value={props.facebook} onChange={(e) => props.setFacebook(e.target.value)} />
        </div>


        <div className="space-y-4">
          {props.links.map((link, index) => (
            <div key={index} className="flex gap-4">
              <Input
                name={"Link" + (index + 1)}
                id={"Link" + index}
                value={link.name}
                placeholder="Ex: Portfólio"
                onChange={(e) => props.handleLinkChange(index, "name", e.target.value)}
              />
              <Input
                name={"URL do link"}
                id={"link-url" + index}
                value={link.url}
                placeholder="Ex: https://meusite.com"
                onChange={(e) => props.handleLinkChange(index, "url", e.target.value)}
              />
            </div>
          ))}

          <button 
            type="button"
            className="grey rounded cursor-pointer uppercase px-4 py-2 hover:opacity-80 transition-opacity" 
            onClick={props.handleAddLink}
          >
            Adicionar Link
          </button>
        </div>
      </form>
    </main>
  );
};