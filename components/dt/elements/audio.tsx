interface TextProps {
    payload: string
}

export const AudioElement = (p: TextProps) => {
    const data = JSON.parse(p.payload);
    return <audio controls>
        <source src={data.soundUrl} />
        Your browser does not support the video tag.
    </audio>;
}