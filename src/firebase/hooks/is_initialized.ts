import { useBlocSelectState } from "@/bloc";
import { useCallback } from "@/utils";

import { FirebaseContext } from "../context";
import type { FirebaseState } from "../models";

export function useIsFirebaseInitialized(): boolean {
  return useBlocSelectState(
    FirebaseContext,
    useCallback((state: FirebaseState) => state.type === "initialized", [])
  );
}
