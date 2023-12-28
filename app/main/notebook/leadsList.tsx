import { LeadCell } from "./leadCell";

interface LeadListProps {
  leads: string[];
  onClick: (id: string) => void;
}

export const LeadList = ({ leads, onClick }: LeadListProps) => {
  return (
    <>
      <div className="h-[350px]" />
      {leads.map((lead) => {
        return <LeadCell lead={lead} onClick={onClick} />;
      })}
      <div className="h-[100px]" />
    </>
  );
};
