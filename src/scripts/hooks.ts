import * as React from "react";

export interface StableActions<K> {
  add: (key: K) => void;
  remove: (key: K) => void;
  reset: () => void;
}

export interface Actions<K> extends StableActions<K> {
  has: (key: K) => boolean;
  setSet: (newSet: Set<K>) => void;
}

export const useSet = <K>(initialSet = new Set<K>()): [Set<K>, Actions<K>] => {
  const [set, setSet] = React.useState(initialSet);

  const stableActions = React.useMemo<StableActions<K>>(
    () => ({
      add: item => setSet(prevSet => new Set([...Array.from(prevSet), item])),
      remove: item => setSet(prevSet => new Set(Array.from(prevSet).filter(i => i !== item))),
      reset: () => setSet(initialSet),
    }),
    [setSet, initialSet],
  );

  const utils = {
    has: React.useCallback(item => set.has(item), [set]),
    setSet,
    ...stableActions,
  } as Actions<K>;

  return [set, utils];
};
