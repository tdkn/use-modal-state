import { useState } from "react";

export function useModalState<
  T extends Record<string, boolean>,
  K extends keyof T
>(initialState: T): [T, (key: K) => void, (key: K) => void] {
  const [state, setState] = useState(initialState);
  const open = (key: K): void => setState({ ...state, [key]: true });
  const close = (key: K): void => setState({ ...state, [key]: false });

  return [state, open, close];
}
