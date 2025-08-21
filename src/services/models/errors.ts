export type ServiceError = UnknownServiceError;

export interface UnknownServiceError {
  readonly type: "unknown";
  readonly error: unknown;
}
