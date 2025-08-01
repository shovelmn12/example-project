import { type AuthError } from "@/authentication";
import { type FirebaseError } from "@/firebase";
import { type UsersError } from "@/users";

export type AppError = UsersAppError | AuthAppError | FirebaseAppError;

export interface UsersAppError {
  readonly source: "users";
  readonly error: UsersError;
}

export interface AuthAppError {
  readonly source: "auth";
  readonly error: AuthError;
}

export interface FirebaseAppError {
  readonly source: "firebase";
  readonly error: FirebaseError;
}
