import { type FirebaseEvent, type FirebaseState } from "@/firebase";
import { createContext } from "@/utils";
import { EMPTY, type Bloc } from "@/bloc";

export type FirebaseBloc = Bloc<FirebaseEvent, FirebaseState>;

export const FirebaseContext = createContext<FirebaseBloc>({
  ...EMPTY,
  state: {
    type: "not-initialized",
  },
});
