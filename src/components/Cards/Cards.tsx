import { Props } from "interfaces";

export function Cards({ children }: Props) {
    return (
        <div className="bg-slate-100 w-96 h-2/4 rounded-md shadow-md flex justify-center items-center">{children}</div>
    )
}