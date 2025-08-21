import { useMemo, memo } from "@/utils";
import { map } from "@/utils/rx";
import { useCreateBloc, type CreatePipeBlocProps } from "@/bloc";

import {
  type ServicesEvent,
  ServiceContext,
  type ServiceState,
  useServicesBloc,
} from "..";

export interface ServiceProviderProps {
  readonly id: string;
}

function Provider({
  children,
  id,
}: React.PropsWithChildren<ServiceProviderProps>) {
  const services = useServicesBloc();
  const bloc = useCreateBloc(
    useMemo<CreatePipeBlocProps<ServicesEvent, ServiceState>>(
      () => ({
        initialState: services.state[id] ?? { type: "init" },
        source$: services.state$.pipe(
          map((state) => state[id] ?? { type: "init" })
        ),
      }),
      [services, id]
    )
  );

  return (
    <ServiceContext.Provider value={bloc}>{children}</ServiceContext.Provider>
  );
}

export const ServiceProvider = memo(Provider);
