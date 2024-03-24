import { CountryOption } from "@repo/types";
import { SelectItem } from "@repo/ui/select";
import { createContext, useContext } from "react";

export type DashboardContextType = {
  marketCountry: CountryOption;
  handleMarketCountry: (countryCode: CountryOption) => void;
  marketCapSort: SelectItem;
  handleMarketCapSort: (sortOption: SelectItem) => void;
};

export const DashboardContext = createContext<DashboardContextType | null>(
  null
);

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      "useDashboardContext must be used within a DashboardContextProvider"
    );
  }
  return context;
};
