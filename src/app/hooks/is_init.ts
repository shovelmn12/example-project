import { useIsFirebaseInitialized } from "@/firebase";
import { useIsSettingsInitialized } from "@/settings";

export function useIsAppInit(): boolean {
  const isFirebaseInit = useIsFirebaseInitialized();
  const isSettingsInit = useIsSettingsInitialized();

  return isFirebaseInit && isSettingsInit;
}
