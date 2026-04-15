import { Children, createContext, useContext } from "react";
import type { Link } from "../interfaces/Link";
import { useState } from "react";

interface ProfileContextType {
    name: string;
    github: string;
    linkedin: string;
    instagram: string;
    tiktok: string;
    facebook: string;
    links: Link[];
    setName: (name: string) => void;
    setGitHub: (github: string) => void;
    setLinkedin: (linkedin: string) => void;
    setTikTok: (tiktok: string) => void;
    setInstagram: (instagram: string) => void;
    setfacebook: (facebook: string) => void;
    handleAddLink: () => void;
    handleLinkChange: (index: number, field: string, value: string) => void;
}


interface ProfileProviderProps{
    children: React.ReactNode;
}


const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
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
            updatedLinks[index] = { 
                ...updatedLinks[index], 
                [field]: value 
            };
    
            setLinks(updatedLinks);
        };

        return (
            <ProfileContext.Provider value={{
                name, 
                github, 
                linkedin, 
                instagram, 
                tiktok, 
                facebook, 
                links,
                setName,
                setFacebook,
                setGithub, 
                setInstagram, 
                setLinkedin, 
                setTiktok,
                handleAddLink,
                handleLinkChange,
            }}>
                {children}
            </ProfileContext.Provider>
    )
}
export const useProfile = () => {
    return useContext(ProfileContext);
}