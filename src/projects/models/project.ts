/**
 * The project model.
 */
export interface Project {
  /**
   * The ID of the project.
   */
  readonly id: string;
  /**
   * The name of the project.
   */
  readonly name: string;
  /**
   * The description of the project.
   */
  readonly description: string;
}
