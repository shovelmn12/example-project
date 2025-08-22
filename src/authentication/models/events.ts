/**
 * The auth event type.
 */
export type AuthEvent =
  | LoginAuthEvent
  | LoggedInAuthEvent
  | LogoutAuthEvent
  | LoggedOutAuthEvent;

/**
 * An event to log in.
 */
export interface LoginAuthEvent {
  /**
   * The type of the event.
   */
  readonly type: "login";
}

/**
 * An event to indicate that the user has been logged in.
 */
export interface LoggedInAuthEvent {
  /**
   * The type of the event.
   */
  readonly type: "logged_in";
  /**
   * The auth token.
   */
  readonly token: string;
}

/**
 * An event to log out.
 */
export interface LogoutAuthEvent {
  /**
   * The type of the event.
   */
  readonly type: "logout";
}

/**
 * An event to indicate that the user has been logged out.
 */
export interface LoggedOutAuthEvent {
  /**
   * The type of the event.
   */
  readonly type: "logged_out";
}
