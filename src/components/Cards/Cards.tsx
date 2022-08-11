import { Props } from "interfaces";

export function Cards({ children, css }: Props) {
    return (
        <div className={`${css} bg-slate-100 rounded-md shadow-md flex justify-center items-center`}>{children}</div>
    )
}