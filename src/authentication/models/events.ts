export type AuthEvent = LoginAuthEvent | LogoutAuthEvent;

export interface LoginAuthEvent {
  readonly type: "login";
}

export interface LogoutAuthEvent {
  readonly type: "logout";
}
