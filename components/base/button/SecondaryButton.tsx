

import { MouseEventHandler } from "react";

interface Props {
    title: string;
    onClick: MouseEventHandler<HTMLButtonElement> | undefined
}

export const SecondaryButton = ({title, onClick}:Props) => {
    return <button onClick={onClick} type="button" className="flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out">
       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
          <path d="M0 0h24v24H0V0z" fill="none"></path>
          <path d="M8 9h8v10H8z" opacity=".3"></path>
          <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path>
       </svg>
       <span className="pl-2 mx-1">{title}</span>
    </button>
}