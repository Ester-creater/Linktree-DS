import { useState } from "react"
import { Input } from "./Input"

export const EditPage = () => {
    const [name, setName] = useState("Stellar");

    return (
        <div>
            <div className="container mx-auto flex ">
                <main className="w-8/12 bg-purple-600 p-4">
                    <form className="space-y-4">

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
                        value={name} 
                        onChange={(event) => {
                            setName(event.target.value);
                        }}/>

                        <div className="grid grid-cols-4 gap-4">
                        <Input name="LinkedIn" id="linkedin" placeholder="Ex: ester-creater" />
                        <Input name="Instagram" id="instagram" placeholder="Ex: ester-creater"/>
                        <Input name="TikTok" id="tiktok" placeholder="Ex: ester-creater"/>
                        <Input name="Facebook" id="facebook" placeholder="Ex: ester-creater"/>
                        </div>
                    </form>
                </main>

                <aside className="w-4/12 bg-purple-300">
                    Seu nome: {}
                </aside>
            </div>
        </div>
    )
}