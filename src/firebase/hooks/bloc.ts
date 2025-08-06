import { useBloc } from "@/bloc";

import { FirebaseContext, type FirebaseBloc } from "..";

export function useFirebaseBloc(): FirebaseBloc {
  return useBloc(FirebaseContext);
}
