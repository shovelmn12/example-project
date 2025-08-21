import { useIsConfigInitialized } from "@/config";
import { useIsFirebaseInitialized } from "@/firebase";
import { useIsSettingsInitialized } from "@/settings";

export function useIsAppInit(): boolean {
  const isFirebaseInit = useIsFirebaseInitialized();
  const isSettingsInit = useIsSettingsInitialized();
  const isConfigInit = useIsConfigInitialized();

  return isFirebaseInit && isSettingsInit && isConfigInit;
}
