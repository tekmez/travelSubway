import React, {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type LanguageContextType = {
  lng: { [key: string]: any } | null;
  setLng: Dispatch<SetStateAction<{ [key: string]: any }>>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within an LanguageProvider");
  }
  return context;
}

const LanguageProvider = (props: { children: ReactNode }): ReactElement => {
  const [lng, setLng] = useState<{ [key: string]: any } | null>(null);

  return <LanguageContext.Provider {...props} value={{ lng, setLng }} />;
};

export { LanguageProvider, useLanguage };
