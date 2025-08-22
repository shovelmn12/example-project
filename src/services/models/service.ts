/**
 * The service model.
 */
export interface Service {
  /**
   * The ID of the service.
   */
  readonly id: string;
  /**
   * The name of the service.
   */
  readonly name: string;
  /**
   * The description of the service.
   */
  readonly description: string;
}
