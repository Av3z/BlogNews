import { Props } from "interfaces";

export function Input({ placeholder, id }: Props) {
    return (
        <div className="mt-4">
            <input className="bg-white rounded-md p-2 text-center font-bold" placeholder={placeholder} type="text" id={id} />
        </div>
    )
}