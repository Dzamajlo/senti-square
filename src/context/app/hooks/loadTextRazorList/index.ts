import { type Dispatch, type SetStateAction, useEffect } from 'react';

import { getTextRazorResponseList } from '@/api/getTextRazorResponseList';
import type { IAppContext } from '@/context/app';
import { useToast } from '@/context/toast';

export const useLoadTextRazorList = ({
  listOfSentences,
  setState,
}: {
  listOfSentences: Array<string>;
  setState: Dispatch<SetStateAction<IAppContext>>;
}) => {
  const { showPromiseToast } = useToast();

  useEffect(() => {
    if (!listOfSentences.length) return;

    setState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    showPromiseToast({
      loading: 'Spracúvam text...',
      promise: getTextRazorResponseList(listOfSentences),
      success: (textRazorResponseList) => {
        setState((prevState) => ({
          ...prevState,
          textRazorResponseList,
          isLoading: false,
        }));

        return 'Text bol spracovaný.';
      },
      error: (error) => {
        setState((prevState) => ({
          ...prevState,
          isLoading: false,
        }));

        if (error && typeof error === 'object' && 'message' in error)
          return String(error.message);
        return 'Nastala chyba pri spracovaní textu.';
      },
    });
  }, [listOfSentences, setState, showPromiseToast]);
};
