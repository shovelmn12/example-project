import { useIsConfigInitialized } from "@/config";

export function useIsAppPreInit(): boolean {
  const isConfigInit = useIsConfigInitialized();

  return isConfigInit;
}
