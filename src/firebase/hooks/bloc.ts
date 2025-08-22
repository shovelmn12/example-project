import { useBloc } from "@/bloc";

import { FirebaseContext, type FirebaseBloc } from "..";

/**
 * A hook to get the Firebase BLoC.
 * @returns The Firebase BLoC.
 */
export function useFirebaseBloc(): FirebaseBloc {
  return useBloc(FirebaseContext);
}
