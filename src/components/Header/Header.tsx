import { Logo } from "../Header/Logo"
import { Menu } from "../Header/Menu"

export function Header() {
    return (
        <header className="bg-purple-950 py-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Logo/>

                <Menu/>
            </div>

          
        </header>
    );
}