import { InvestigationsDTO } from "../../../models/InvestigationsDto";
import { LeadCell } from "./leadCell";

interface LeadListProps {
  leads: InvestigationsDTO[];
}

export const LeadList = ({ leads }: LeadListProps) => {
  return (
    <>
      <div className="h-[350px]" />
      {leads.map((lead) => {
        return <LeadCell lead={lead} />;
      })}
      <div className="h-[100px]" />
    </>
  );
};
