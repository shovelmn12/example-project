import { type AuthError } from "@/authentication";
import { type FirebaseError } from "@/firebase";
import { type ProfilesError } from "@/profiles";
import type { ProjectsError } from "@/projects";
import type { SettingsError } from "@/settings";

export type AppError =
  | ProfilesAppError
  | AuthAppError
  | FirebaseAppError
  | ProjectsAppError
  | SettingsAppError
  | ConfigAppError;

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

export interface SettingsAppError {
  readonly source: "settings";
  readonly error: SettingsError;
}

export interface ProjectsAppError {
  readonly source: "projects";
  readonly error: ProjectsError;
}

export interface ConfigAppError {
  readonly source: "config";
  readonly error: ProjectsError;
}
