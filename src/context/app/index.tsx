import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import type { TextRazorSuccessApiResponse as ITextRazorResponseListItem } from '@/api/model';
import { useLoadTextRazorList } from '@/context/app/hooks/loadTextRazorList';
import { noop } from '@/helpers/noop';

export type IAppContext = {
  setListOfSentences: (listOfSentences: string[]) => void;
  textRazorResponseList: ITextRazorResponseListItem[];
  listOfSentences: string[];
  isLoading: boolean;
};

const AppContext = createContext<IAppContext>({
  textRazorResponseList: [],
  setListOfSentences: noop,
  listOfSentences: [],
  isLoading: false,
});

const initialState: IAppContext = {
  textRazorResponseList: [],
  setListOfSentences: noop,
  listOfSentences: [],
  isLoading: false,
} as const;

export const AppProvider: FCC = ({ children }) => {
  const [state, setState] = useState(initialState);

  useLoadTextRazorList({
    listOfSentences: state.listOfSentences,
    setState,
  });

  const setListOfSentences = useCallback(
    (listOfSentences: string[]) =>
      setState((prevState) => ({
        ...prevState,
        listOfSentences,
      })),
    [],
  );

  return (
    <AppContext.Provider
      value={useMemo<IAppContext>(
        () => ({
          ...state,
          setListOfSentences,
        }),
        [state, setListOfSentences],
      )}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext<IAppContext>(AppContext);
