import { HTMLInputTypeAttribute, MouseEventHandler } from "react";

interface Props {
  placeholder: string | undefined;
  type: HTMLInputTypeAttribute | undefined;
  value: string;
  onChange: (value: string) => void | undefined;
  icon?: string;
}

export const TextInput = ({
  placeholder,
  type,
  value,
  onChange,
  icon,
}: Props) => {
  if (icon) {
    return (
      <div className="relative">
        {icon == "email" ? (
          <div className="absolute left-[15px] top-[15px] bg-no-repeat bg-center w-[30px] h-[30px] bg-[url('/kd/icons/email.png')] bg-contain z-20"></div>
        ) : (
          <div className="absolute left-[15px] top-[15px] bg-no-repeat bg-center w-[30px] h-[30px] bg-[url('/kd/icons/password.png')] bg-contain z-20"></div>
        )}
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          type={type}
          className="h-[60px] bg-transparent text-[#131A29] border border-[#9C8376] placeholder-[#9C8376] w-full px-4 pl-[50px] py-2.5 rounded-lg focus:border-[#131A29] focus:shadow-outline focus:ring-1 ring-offset-current ring-offset-1 ring-[#131A29]"
          // className="text-black dark:text-gray-100  placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-gray-500  dark:focus:bg-gray-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
        />
      </div>
    );
  } else {
    return (
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type={type}
        className="h-[60px] bg-transparent text-[#131A29] border border-[#9C8376] placeholder-[#9C8376] w-full px-4 py-2.5 rounded-lg focus:border-[#131A29] focus:shadow-outline focus:ring-1 ring-offset-current ring-offset-1 ring-[#131A29]"
        // className="text-black dark:text-gray-100  placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-gray-500  dark:focus:bg-gray-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
      />
    );
  }
};
