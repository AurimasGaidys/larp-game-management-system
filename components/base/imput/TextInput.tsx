import { HTMLInputTypeAttribute, MouseEventHandler } from "react";

interface Props {
    placeholder: string | undefined;
    type: HTMLInputTypeAttribute | undefined;
    value: string;
    onChange: (value: string) => void | undefined

}

export const TextInput = ({placeholder, type, value, onChange}:Props) => {
    return  <input 
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder={placeholder}
    type={type}
    className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
    /> 
}