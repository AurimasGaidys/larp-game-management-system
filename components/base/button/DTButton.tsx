import { MouseEventHandler } from "react";

interface Props {
    title: string;
    loading?: boolean;
    disabled?: boolean;
    disabledTitle?: string;
    onClick: MouseEventHandler<HTMLButtonElement> | undefined

}

export const DTButton = ({ title, loading, onClick,disabledTitle, disabled }: Props) => {
    return <div>
        <button disabled={loading || disabled } onClick={onClick} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:opacity-75">{title}</button>
        <p>{disabledTitle}</p>
    </div>
}