import { useBlocSelectState } from "@/utils";
import { FirebaseContext } from "../context";
import type { FirebaseState } from "../models";

export function useIsFirebaseInitialized(): boolean {
  return useBlocSelectState(FirebaseContext, (state: FirebaseState) => {
    console.log(JSON.stringify(state));

    return state.type === "initialized";
  });
}
