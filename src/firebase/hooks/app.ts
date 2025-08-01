import { useBlocState } from "@/bloc";
import { none, type Option, some } from "@/utils";

import { FirebaseContext, type FirebaseApp } from "..";

export function useFirebaseApp(): Option<FirebaseApp> {
  const state = useBlocState(FirebaseContext);

  if (state.type === "initialized") {
    return some(state.app);
  }

  return none;
}
