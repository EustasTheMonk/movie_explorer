import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { useEffect, useState } from "react"
import type {SearchQuery} from "../gql/graphql.ts";
import {localStorageKeys} from "../constants/localStorageKeys.ts";
import {toast} from "sonner";

type WatchlistItem = SearchQuery['search'][number];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function useDebounce<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

const getStored = (): WatchlistItem[] => {
  try {
    const raw = localStorage.getItem(localStorageKeys.watchlist);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const useWatchlist = () => {
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>(getStored);

  const save = (items: WatchlistItem[]) => {
    setWatchlist(items);
    localStorage.setItem(localStorageKeys.watchlist, JSON.stringify(items));
  };

  const add = (item: WatchlistItem) => {
    if (watchlist.some(i => i.id === item.id)) return;
    toast.success(`${item.title} added to watchlist!`);
    save([...watchlist, item]);
  };

  const remove = (item: WatchlistItem) => {
    toast.success(`${item.title} removed from watchlist!`);
    save(watchlist.filter(i => i.id !== item.id));
  };

  const isInWatchlist = (id: WatchlistItem['id']) => {
    return watchlist.some(i => i.id === id);
  };

  return { watchlist, add, remove, isInWatchlist };
};

