import { useBlocSelectState } from "@/bloc";
import { useCallback } from "@/utils";

import { FirebaseContext, type FirebaseState } from "..";

export function useIsFirebaseInitialized(): boolean {
  return useBlocSelectState(
    FirebaseContext,
    useCallback((state: FirebaseState) => state.type === "initialized", [])
  );
}
