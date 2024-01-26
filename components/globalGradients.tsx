interface Props {
  location: "leads" | "profile" | "rules" | "notebook" | "items";
}

export const GlobalGradients = ({ location }: Props) => {
  const gradients = {
    leads:
      "linear-gradient(173deg, rgba(141, 184, 84, 0.32) 2.29%, rgba(141, 184, 84, 0.00) 57.3%)",
    profile:
      "linear-gradient(173deg, rgba(200, 100, 73, 0.30) 2.29%, rgba(200, 100, 73, 0.00) 57.3%)",
    rules:
      "linear-gradient(173deg, rgba(184, 84, 184, 0.32) 2.29%, rgba(184, 84, 184, 0.00) 57.3%)",
    notebook:
      "linear-gradient(173deg, rgba(210, 186, 89, 0.29) 2.29%, rgba(210, 186, 89, 0.00) 57.3%)",
    items:
      "linear-gradient(173deg, rgba(83, 150, 153, 0.32) 2.29%, rgba(83, 150, 153, 0.00) 57.3%)",
  };

  return (
    <div
      className="fixed top-[0px] left-[0px] h-[300px] w-full z-20"
      style={{
        background: gradients[location],
        zIndex: 31,
      }}
    ></div>
  );
};
