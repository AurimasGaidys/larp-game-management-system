import { MouseEventHandler } from "react";

interface Props {
    title: string;
    onClick: MouseEventHandler<HTMLDivElement> | undefined

}

export const BaseButton = ({title, onClick}:Props) => {
    return <div onClick={onClick}>
    <h2 className={""}>
     {title}
    </h2>
  </div>
}