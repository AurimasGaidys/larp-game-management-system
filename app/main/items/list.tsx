import { UserItem } from "../../../models/player/Item";
import { ItemCell } from "./cell";

interface ListProps {
  items: UserItem[];
}

export const List = ({ items }: ListProps) => {
  return (
    <>
      <div className="h-[250px]" />
      {items.map((item) => {
        return <ItemCell item={item} />;
      })}
      <div className="h-[100px]" />
    </>
  );
};
