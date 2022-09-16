import { CardNotice } from "components/Cards";

export function FlatList({ data }: any) {
    const result = data.map((item: any) => <CardNotice data={item} />)

    return result;
}