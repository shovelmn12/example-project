import { useIsFirebaseInitialized } from "@/firebase";

export function useIsAppInit(): boolean {
  return useIsFirebaseInitialized();
}
