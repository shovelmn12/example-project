import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useCallback, useEffect } from "@/utils";
import { useEventsBus } from "@/events";

import { useAuthBloc } from ".";
import { useFirebaseApp } from "@/firebase";
import type { AppEvent } from "@/app";

export function AuthSync({ children }: React.PropsWithChildren) {
  const bus = useEventsBus();
  const bloc = useAuthBloc();
  const firebase = useFirebaseApp();
  const onLoggedIn = useCallback(
    (token: string) => bus.emit("auth", { type: "logged_in", token }),
    [bus]
  );
  const onLoggedOut = useCallback(
    () => bus.emit("auth", { type: "logged_out" }),
    [bus]
  );
  const onInit = useCallback(
    (event: AppEvent) => {
      if (event.type === "init") {
        bus.emit("auth", { type: "init" });
      }
    },
    [bus]
  );

  useEffect(() => {
    bus.on("auth", bloc.add);
    bus.on("app", onInit);

    return () => {
      bus.off("auth", bloc.add);
      bus.off("app", onInit);
    };
  }, [bus, onInit, bloc.add]);

  useEffect(() => {
    if (firebase._tag === "Some") {
      const unsubscribe = onAuthStateChanged(
        getAuth(firebase.value),
        async (user) => {
          if (user) {
            onLoggedIn(await user.getIdToken());
          } else {
            onLoggedOut();
          }
        }
      );

      return () => {
        unsubscribe();
      };
    }
  }, [bus, firebase, onLoggedIn, onLoggedOut]);

  return <>{children}</>;
}
