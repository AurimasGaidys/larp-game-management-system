
interface TextProps {
    payload: string
}

export const ImageElement = (p: TextProps ) => {
    const data = JSON.parse(p.payload);
    return <img src={data.imageUrl}></img>;
}