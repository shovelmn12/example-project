import { useIsFirebaseInitialized } from "@/firebase";
import { useIsSettingsInitialized } from "@/settings";
import { useIsAuthInitialized } from "@/authentication";

import { useIsAppPreInit } from ".";

export function useIsAppInit(): boolean {
  const isPreInit = useIsAppPreInit();
  const isFirebaseInit = useIsFirebaseInitialized();
  const isSettingsInit = useIsSettingsInitialized();
  const isAuthInit = useIsAuthInitialized();

  return isPreInit && isFirebaseInit && isSettingsInit && isAuthInit;
}
