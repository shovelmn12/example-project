import { FirebaseContext, type FirebaseBloc } from "../context";
import { useBloc } from "@/bloc";

export function useFirebaseBloc(): FirebaseBloc {
  return useBloc(FirebaseContext);
}
