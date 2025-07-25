import { type FirebaseEvent, type FirebaseState } from "@/firebase";
import { createContext, EMPTY, type Bloc } from "@/utils";

export type FirebaseBloc = Bloc<FirebaseEvent, FirebaseState>;

export const FirebaseContext = createContext<FirebaseBloc>({
  ...EMPTY,
  state: {
    type: "not-initialized",
  },
});
