import { Logo, Menus } from "components";

export function Nav() {
    return (
        <nav className="font-bold w-full h-20 bg-slate-50 shadow-md ">
            <div className="h-full max-w-7xl m-auto flex items-center justify-between">
                <Logo />
                <Menus />
            </div>
        </nav>
    );
}