import { useIsConfigInitialized } from "@/config";

/**
 * A hook to check if the app is pre-initialized.
 * @returns `true` if the app is pre-initialized, otherwise `false`.
 */
export function useIsAppPreInit(): boolean {
  const isConfigInit = useIsConfigInitialized();

  return isConfigInit;
}
