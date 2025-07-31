import { initializeApp } from "firebase/app";

import {
  useCreateBloc,
  useMemo,
  type CreateBlocProps,
  type EventHandlersObject,
} from "@/utils";
import { type EventsEmitter, useEventsBus } from "@/events";

import { FirebaseContext } from "./context";
import { type FirebaseEvent, type FirebaseState } from "./models";

const config = {
  apiKey: "AIzaSyCHZ1iODNpSsB3GjlvGBwQb6IaPts38deY",
  authDomain: "aether-17437.firebaseapp.com",
  projectId: "aether-17437",
  storageBucket: "aether-17437.firebasestorage.app",
  messagingSenderId: "1046865714336",
  appId: "1:1046865714336:web:7fb47a56e0d30f8167bdc5",
  measurementId: "G-FRZBGDFQN5",
};

function createHandlers(
  bus: EventsEmitter
): EventHandlersObject<FirebaseEvent, FirebaseState> {
  return {
    init: (_, context) => {
      try {
        const app = initializeApp(config);

        context.update({ type: "initialized", app });

        bus.emit("firebase", { type: "initialized" });
      } catch (error) {
        context.update({ type: "error", error });

        bus.emit("firebase", { type: "error", error });
      }
    },
    initialized: () => {},
  };
}

export function FirebaseProvider({ children }: React.PropsWithChildren) {
  const bus = useEventsBus();
  const bloc = useCreateBloc(
    useMemo<CreateBlocProps<FirebaseEvent, FirebaseState>>(
      () => ({
        initialState: { type: "not-initialized" },
        handlers: createHandlers(bus),
      }),
      [bus]
    )
  );

  return (
    <FirebaseContext.Provider value={bloc}>{children}</FirebaseContext.Provider>
  );
}
