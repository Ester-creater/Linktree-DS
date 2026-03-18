import { Logo } from "../Header/Logo"

export function Header() {
    return (
        <header className="bg-purple-950 py-4 text-white">
            <div className="container mx-auto flex">
                <Logo/>
            </div>

            <div></div>
        </header>
    );
}