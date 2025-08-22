import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useCallback, useEffect } from "@/utils";
import { useEventsBus } from "@/events";

import { useAuthBloc } from ".";
import { useFirebaseApp } from "@/firebase";

/**
 * A component that syncs the auth BLoC with the event bus and Firebase auth.
 * @param props The props for the component.
 * @param props.children The children to render.
 * @returns The component.
 */
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

  useEffect(() => {
    bus.on("auth", bloc.add);

    return () => bus.off("auth", bloc.add);
  }, [bus, bloc.add]);

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
