import { FirebaseContext, type FirebaseBloc } from "../context";
import { useBloc } from "@/utils";

export function useFirebaseBloc(): FirebaseBloc {
  return useBloc(FirebaseContext);
}
