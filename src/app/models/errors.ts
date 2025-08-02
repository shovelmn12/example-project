import { type AuthError } from "@/authentication";
import { type FirebaseError } from "@/firebase";
import { type ProfilesError } from "@/profiles";

export type AppError = ProfilesAppError | AuthAppError | FirebaseAppError;

export interface ProfilesAppError {
  readonly source: "profiles";
  readonly error: ProfilesError;
}

export interface AuthAppError {
  readonly source: "auth";
  readonly error: AuthError;
}

export interface FirebaseAppError {
  readonly source: "firebase";
  readonly error: FirebaseError;
}
