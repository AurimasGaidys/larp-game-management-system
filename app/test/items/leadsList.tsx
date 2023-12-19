import { LeadCell } from "./leadCell";

interface LeadListProps {
  leads: string[];
}

export const LeadList = ({ leads }: LeadListProps) => {
  return (
    <>
      <div className="h-[250px]" />
      {leads.map((lead) => {
        return <LeadCell lead={lead} />;
      })}
      <div className="h-[100px]" />
    </>
  );
};
