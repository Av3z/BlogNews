import { Props } from "interfaces";
import JoditEditor from "jodit-react";

export function RichInput({ css }: Props) {
    return (
        <div className={css}>
            <JoditEditor
                value={""}
                config={{ readonly: false }}
                onChange={(newContent) => { }}
            />
        </div>
    )
}