import { useBlocState } from "@/bloc";
import { none, type Option, some } from "@/utils";

import { FirebaseContext, type FirebaseApp } from "..";

/**
 * A hook to get the Firebase app.
 * @returns The Firebase app if it is initialized, otherwise `none`.
 */
export function useFirebaseApp(): Option<FirebaseApp> {
  const state = useBlocState(FirebaseContext);

  if (state.type === "initialized") {
    return some(state.app);
  }

  return none;
}
