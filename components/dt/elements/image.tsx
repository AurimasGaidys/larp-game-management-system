interface TextProps {
  payload: string;
}

export const ImageElement = (p: TextProps) => {
  const data = JSON.parse(p.payload);
  return (
    <div className="relative">
      <div className="absolute -top-[0] bg-bottom bg-no-repeat h-[48px] w-[300px] bg-[url('/dt/img-f-top.png')] bg-contain z-20"></div>
      <div className="absolute top-[48px] -mb-[141px]  h-[calc(100%-101px)] w-[300px] bg-[url('/dt/img-f-middle.png')] bg-contain z-10" />
      <img className="p-[5px]" src={data.imageUrl}></img>
      <div className="absolute bottom-[0] bg-bottom bg-no-repeat h-[54px] w-[300px] bg-[url('/dt/img-f-bottom.png')] bg-contain z-20"></div>
    </div>
  );
};
