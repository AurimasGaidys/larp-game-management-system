import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import style from './markdown.module.css';
interface TextProps {
    payload: string
}

export const TextElement = (p: TextProps) => {
    const textData = JSON.parse(p.payload);
    return <Markdown
        remarkPlugins={[remarkGfm]}
        className={style.reactMarkDown}
    >
        {textData.texts[0]}
    </Markdown>
}