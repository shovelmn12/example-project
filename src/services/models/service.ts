import { type DataState } from "@/bloc";
import { type Brand } from "fp-ts";

export type ServiceID = Brand<string, "ServiceID">;

export interface Service {
  readonly id: ServiceID;
  readonly name: string;
  readonly description: string;
}

export type ServiceState = DataState<Service>;
