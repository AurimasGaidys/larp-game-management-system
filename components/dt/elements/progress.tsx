
interface TextProps {
    payload: string
}

export const ProgressElement = (p: TextProps) => {
    // const data = JSON.parse(p.payload);
    return <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "45%" }}></div>
    </div>
}
