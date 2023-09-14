interface TextProps {
    payload: string
}

export const TextElement = (p: TextProps ) => {
    const textData = JSON.parse(p.payload);
    return <p>{textData.texts}</p>;
}