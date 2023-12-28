import { CatCell } from "./catCell";

interface LeadListProps {
  leads: string[];
  onClick: (id: string) => void;
}

export const CatList = ({ leads, onClick }: LeadListProps) => {
  return (
    <>
      <div className="h-[350px]" />
      {leads.map((lead) => {
        return <CatCell lead={lead} onClick={onClick} />;
      })}
      <div className="h-[100px]" />
    </>
  );
};
