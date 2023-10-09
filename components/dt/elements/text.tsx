import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface TextProps {
    payload: string
}

export const TextElement = (p: TextProps) => {
    const textData = JSON.parse(p.payload);
    return <Markdown remarkPlugins={[remarkGfm]}>
        {textData.texts[0]}
    </Markdown>
}