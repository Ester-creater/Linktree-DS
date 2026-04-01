import { useState } from "react"
import { Input } from "./Input"

interface Link {
    name: string,
    url: string
}

export const EditPage = () => {
    const [name, setName] = useState("Stellar");
    const [Links, setLinks] = useState<Link[]>([]);

    const handleAddLink = () => {
        setLinks([...Links, {name: "", url: ""}]);
    }

    const handleLinkChange = (index: number, field: string, value: string) => {
        const updatedLinks = [...Links];

        updatedLinks[index] = {
            ...updatedLinks[index], 
            [field]: value,
        }

        setLinks(updatedLinks);
    }

    return (
        <div>
            <div className="container mx-auto flex ">
                <main className="w-8/12 bg-purple-600 p-4">
                    <form className="space-y-4" onSubmit={(event) => {
                        event.preventDefault();
                    }}>

                        <Input 
                        name="Nome" 
                        id="name" 
                        placeholder="Ex: João" 
                        value={name} 
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                        />
                        <Input name="GitHub" 
                        id="github" 
                        placeholder="Ex: ester-creater" 
                        value={""} 
                        onChange={(event) => {
                    
                        }}/>

                        <div className="grid grid-cols-4 gap-4">
                        <Input name="LinkedIn" id="linkedin" placeholder="Ex: ester-creater" />
                        <Input name="Instagram" id="instagram" placeholder="Ex: ester-creater"/>
                        <Input name="TikTok" id="tiktok" placeholder="Ex: ester-creater"/>
                        <Input name="Facebook" id="facebook" placeholder="Ex: ester-creater"/>
                        </div>

                        <div className="space-y-4">
                            {
                                Links.map((link, index) => {
                                    return (
                                        <div className="flex gap-4">
                                            <Input
                                                name={"Link " + index + 1}
                                                id={"Link-" + index}
                                                value={link.name}
                                                placeholder="Ex: Portfólio"
                                                onChange={(event) => {
                                                    handleLinkChange(index, "name", event.target.value);
                                                }}
                                            />
                                            <Input
                                                name={"URL do Link"}
                                                id={"link-url-" + index}
                                                value={link.url}
                                                placeholder="Ex: https://meusite.com"
                                                onChange={(event) => {
                                                    handleLinkChange(index, "url", event.target.value)
                                                }}
                                            />
                                        </div>     
                                    )

                                })
                            }
                            <button className="bg-white rounded cursor-pointer uppercase px-4 py-2 
                            hover:opacity-90 transition-opacity" 
                            onClick={handleAddLink}>Adicionar Link</button>
                        </div>

                    </form>
                </main>

                <aside className="w-4/12 bg-purple-300">
                    Seu nome: {name}
                </aside>
            </div>
        </div>
    )
}