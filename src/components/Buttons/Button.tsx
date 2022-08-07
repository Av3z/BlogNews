import { Props } from 'interfaces';

export function Button({ children }: Props) {
    return <button className="py-2 px-4 rounded-md bg-green-500 text-white font-bold w-44 hover:bg-green-600 transition-all">{children}</button>
}