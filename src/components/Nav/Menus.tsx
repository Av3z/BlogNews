export function Menus() {
    return (
        <ul className="flex">
            <li className="mr-5 text-slate-500 hover:text-sm hover:text-black transition-all"><a href="/">Home</a></li>
            <li className="mr-5 text-slate-500 hover:text-sm transition-all">About</li>
            <li className="mr-5 text-slate-500 hover:text-sm transition-all"><a href="/login">Login</a></li>
            <li className="mr-5 text-slate-500 hover:text-sm transition-all"><a href="/register">Register</a></li>
        </ul>
    )
}