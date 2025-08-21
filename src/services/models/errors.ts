export type ServicesError = UnknownServiceError;

export interface UnknownServiceError {
  readonly type: "unknown";
  readonly error: unknown;
}
