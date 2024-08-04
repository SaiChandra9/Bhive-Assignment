import React, { createContext, useContext, ReactNode } from "react";
import { LocationData } from "../types";
import { data } from "../constants";

interface LocationContextType {
  locations: LocationData[];
}

const LocationContext = createContext<LocationContextType | undefined>(
  undefined
);

interface LocationProviderProps {
  children: ReactNode;
}

export const LocationProvider = ({ children }: LocationProviderProps) => {
  const value = { locations: data };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

export function useLocations(): LocationContextType {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error("useLocations must be used within a LocationProvider");
  }
  return context;
}
