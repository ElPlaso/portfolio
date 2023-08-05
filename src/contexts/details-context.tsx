import { ReactNode, createContext, useContext, useState } from "react";

type DetailsContextType = {
  detailsOpen: boolean;
  setDetailsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DetailsContext = createContext<DetailsContextType>(null as any);

export function DetailsProvider({ children }: { children: ReactNode }) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <DetailsContext.Provider value={{ detailsOpen, setDetailsOpen }}>
      {children}
    </DetailsContext.Provider>
  );
}

export function useDetailsContext() {
  return useContext(DetailsContext);
}
