import { Props } from "interfaces";

export function Container({ children }: Props) {
    return (
        <div className="flex p-5 w-[80%]">{children}</div>
    )
}