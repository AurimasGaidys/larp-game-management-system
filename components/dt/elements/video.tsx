interface TextProps {
    payload: string
}

export const VideoElement = (p: TextProps) => {
    const data = JSON.parse(p.payload);
    return <video className="w-full" autoPlay muted >
        <source src={data.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
    </video>;
}