import { Props } from "interfaces";

export function Background({ children }: Props) {
    return (
        <div className="bg-white">{children}</div>
    )
}