import type { UsersError } from "@/users";

export type AppError = UsersAppError;

export interface UsersAppError {
  readonly source: "users";
  readonly error: UsersError;
}
