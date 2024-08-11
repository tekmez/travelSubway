import React, {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type GeneralContextType = {
  lng: { [key: string]: any } | null;
  setLng: Dispatch<SetStateAction<{ [key: string]: any }>>;
  stationFor?: string;
  setStationFor?: Dispatch<SetStateAction<string | undefined>>;
};

const GeneralContext = createContext<GeneralContextType | undefined>(undefined);

function useGeneralContext(): GeneralContextType {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error("useGeneralContext must be used within an GeneralContext");
  }
  return context;
}

const GeneralProvider = (props: { children: ReactNode }): ReactElement => {
  const [lng, setLng] = useState<{ [key: string]: any } | null>(null);
  const [stationFor, setStationFor] = useState<string | undefined>(undefined);

  return (
    <GeneralContext.Provider
      {...props}
      value={{ lng, setLng, stationFor, setStationFor }}
    />
  );
};

export { GeneralProvider, useGeneralContext };
