import { useState } from "react";
import { Main } from "./Main";
import { Preview } from "./Preview";


export const EditPage = () => {}
    return (
        <div>
            <div className="container mx-auto flex">
                <Main
                    name={name} 
                    setName={setName}

                    github={github} 
                    setGithub={setGithub}

                    linkedin={linkedin} 
                    setLinkedin={setLinkedin}

                    instagram={instagram} 
                    setInstagram={setInstagram}

                    tiktok={tiktok} 
                    setTiktok={setTiktok}

                    facebook={facebook} 
                    setFacebook={setFacebook}

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
    
)