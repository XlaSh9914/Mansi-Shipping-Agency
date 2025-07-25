import React, { createContext, useContext, useState, ReactNode } from "react";

interface LoadingContextType {
  startLoading: () => void;
  stopLoading: () => void;
  isLoading: boolean;
  isClosing: boolean;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const startLoading = () => {
    setIsLoading(true);
    setIsClosing(true);
  };

  const stopLoading = () => {
    setIsClosing(false);
    setTimeout(() => setIsLoading(false), 500); // Wait for opening animation
  };

  return (
    <LoadingContext.Provider
      value={{ startLoading, stopLoading, isLoading, isClosing }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }

  return context;
};
