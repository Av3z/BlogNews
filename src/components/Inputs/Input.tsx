import { Props } from "interfaces";

export function Input({ css, placeholder, id, type = 'text' }: Props) {
    return (
        <div className="mt-4">
            <input className={`${css}bg-white rounded-md p-2 text-center font-bold`} placeholder={placeholder} type={type} id={id} />
        </div>
    )
}