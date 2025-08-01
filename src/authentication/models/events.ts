export type AuthEvent =
  | LoginAuthEvent
  | LoggedInAuthEvent
  | LogoutAuthEvent
  | LoggedOutAuthEvent;

export interface LoginAuthEvent {
  readonly type: "login";
}

export interface LoggedInAuthEvent {
  readonly type: "logged_in";
  readonly token: string;
}

export interface LogoutAuthEvent {
  readonly type: "logout";
}

export interface LoggedOutAuthEvent {
  readonly type: "logged_out";
}
