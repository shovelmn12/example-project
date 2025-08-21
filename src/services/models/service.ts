import { type DataState } from "@/bloc";

export interface Service {
  readonly id: string;
  readonly name: string;
  readonly description: string;
}

export type ServiceState = DataState<Service>;
