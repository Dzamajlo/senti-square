import { createContext, type ReactNode, useContext, useMemo } from 'react';
import { type ExternalToast, toast, Toaster } from 'sonner';

import { noop } from '@/helpers/noop';

type ToastType = 'success' | 'info' | 'error';

type PromiseToastProps<T = unknown> = Parameters<typeof toast.promise<T>>[1] & {
  promise: Parameters<typeof toast.promise<T>>[0];
};

export type IToastContext = {
  /**
   * Show a toast message
   * @param msg - The message to show
   * @param type - The type of the toast, default is 'success'
   * @param props - Additional props to pass to the toast
   * @returns void
   * @example
   * showToast('Success toast is default');
   * showToast('Information toast', 'info');
   * showToast('Error toast', 'error');
   * showToast(<div>ReactNode toast</div>);
   * */
  showToast: (
    msg: ReactNode | string,
    type?: ToastType,
    props?: ExternalToast,
  ) => void;
  /**
   * Show a toast message with a promise
   * @param props - The promise toast props
   * @returns void
   * @example
   * showPromiseToast({
   *   loading: 'Loading...',
   *   success: 'Success message',
   *   error: 'Error message',
   *   promise: async () => await somePromise();
   * });
   * @example
   * showPromiseToast({
   * loading: 'Loading...',
   * success: (response) => `Success message with data: ${response}`,
   * error: (error) => `Error message with error: ${error}`,
   * promise: async () => await somePromise();
   * });
   * */
  showPromiseToast: <T = unknown>(props: PromiseToastProps<T>) => void;
};

const ToastContext = createContext<IToastContext>({
  showPromiseToast: noop,
  showToast: noop,
});

export const ToastProvider: FCC = ({ children }) => (
  <ToastContext.Provider
    value={useMemo<IToastContext>(
      () => ({
        showToast: (msg, type, props) => toast[type ?? 'success'](msg, props),
        showPromiseToast: <T = unknown,>({
          promise,
          ...props
        }: PromiseToastProps<T>) => toast.promise<T>(promise, props),
      }),
      [],
    )}
  >
    <Toaster
      toastOptions={{
        duration: 4000,
      }}
    />
    {children}
  </ToastContext.Provider>
);

export const useToast = () => useContext<IToastContext>(ToastContext);
