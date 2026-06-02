"use client";

import React, { createContext, useContext, useState } from 'react';

const LoadingContext = createContext<{ loaded: boolean; setLoaded: (val: boolean) => void }>({
  loaded: false,
  setLoaded: () => {},
});

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <LoadingContext.Provider value={{ loaded, setLoaded }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
