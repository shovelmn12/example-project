import { type FirebaseEvent, type FirebaseState } from "@/firebase";
import { createContext } from "@/utils";
import { EMPTY, type Bloc } from "@/bloc";

/**
 * The Firebase BLoC type.
 */
export type FirebaseBloc = Bloc<FirebaseEvent, FirebaseState>;

/**
 * The Firebase context.
 */
export const FirebaseContext = createContext<FirebaseBloc>({
  ...EMPTY,
  state: {
    type: "not-initialized",
  },
});
