import { useIsAuthInitialized } from "@/authentication";
import { useIsConfigInitialized } from "@/config";
import { useIsFirebaseInitialized } from "@/firebase";
import { useIsSettingsInitialized } from "@/settings";

export function useIsAppInit(): boolean {
  const isFirebaseInit = useIsFirebaseInitialized();
  const isSettingsInit = useIsSettingsInitialized();
  const isConfigInit = useIsConfigInitialized();
  const isAuthInit = useIsAuthInitialized();

  return isFirebaseInit && isSettingsInit && isConfigInit && isAuthInit;
}
