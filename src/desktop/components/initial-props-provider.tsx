import { kx } from '@/type/kintone.api';
import React, { createContext, useContext, PropsWithChildren } from 'react';

type Props = { record: kx.RecordData | null; condition: kintone.plugin.Condition | null };

const Context = createContext<Props>({
  record: null,
  condition: null,
});

export const useInitialProps = () => {
  return useContext(Context);
};

export const InitialPropsProvider = ({ children, ...props }: PropsWithChildren<Props>) => {
  return <Context.Provider value={props}>{children}</Context.Provider>;
};
