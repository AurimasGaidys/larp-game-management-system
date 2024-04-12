"use client";
import { useState } from "react";
import { EventContext } from "../../dataLayer/globalContext/eventContext";
import { UserContext } from "../../dataLayer/globalContext/userContext";

export const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute z-50 " onClick={() => {setIsOpen(false)}}>
      {isOpen ? (
        <>
          <UserContext />
          <EventContext />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
