import { useBlocSelectState } from "@/bloc";
import { useCallback } from "@/utils";

import { FirebaseContext, type FirebaseState } from "..";

/**
 * A hook to check if Firebase is initialized.
 * @returns `true` if Firebase is initialized, otherwise `false`.
 */
export function useIsFirebaseInitialized(): boolean {
  return useBlocSelectState(
    FirebaseContext,
    useCallback((state: FirebaseState) => state.type === "initialized", [])
  );
}
