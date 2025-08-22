import { type AuthError } from "@/authentication";
import { type ConfigError } from "@/config";
import { type FirebaseError } from "@/firebase";
import { type ProfilesError } from "@/profiles";
import type { ProjectsError } from "@/projects";
import { type ServiceError } from "@/services";
import type { SettingsError } from "@/settings";

/**
 * The app error type.
 */
export type AppError =
  | ProfilesAppError
  | AuthAppError
  | FirebaseAppError
  | ProjectsAppError
  | SettingsAppError
  | ConfigAppError
  | ServicesAppError;

/**
 * A profiles app error.
 */
export interface ProfilesAppError {
  /**
   * The source of the error.
   */
  readonly source: "profiles";
  /**
   * The error.
   */
  readonly error: ProfilesError;
}

/**
 * An auth app error.
 */
export interface AuthAppError {
  /**
   * The source of the error.
   */
  readonly source: "auth";
  /**
   * The error.
   */
  readonly error: AuthError;
}

/**
 * A Firebase app error.
 */
export interface FirebaseAppError {
  /**
   * The source of the error.
   */
  readonly source: "firebase";
  /**
   * The error.
   */
  readonly error: FirebaseError;
}

/**
 * A settings app error.
 */
export interface SettingsAppError {
  /**
   * The source of the error.
   */
  readonly source: "settings";
  /**
   * The error.
   */
  readonly error: SettingsError;
}

/**
 * A projects app error.
 */
export interface ProjectsAppError {
  /**
   * The source of the error.
   */
  readonly source: "projects";
  /**
   * The error.
   */
  readonly error: ProjectsError;
}

/**
 * A config app error.
 */
export interface ConfigAppError {
  /**
   * The source of the error.
   */
  readonly source: "config";
  /**
   * The error.
   */
  readonly error: ConfigError;
}

/**
 * A services app error.
 */
export interface ServicesAppError {
  /**
   * The source of the error.
   */
  readonly source: "services";
  /**
   * The error.
   */
  readonly error: ServiceError;
}
