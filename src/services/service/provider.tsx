import { useMemo, memo } from "@/utils";
import { map } from "@/utils/rx";
import { useCreateBloc, type CreatePipeBlocProps } from "@/bloc";

import {
  type ServicesEvent,
  ServiceContext,
  type ServiceState,
  useServicesBloc,
} from "..";

/**
 * The props for the `ServiceProvider` component.
 */
export interface ServiceProviderProps {
  /**
   * The ID of the service.
   */
  readonly id: string;
}

/**
 * The internal provider for the service BLoC.
 * @param props The props for the component.
 * @param props.children The children to render.
 * @param props.id The ID of the service.
 * @returns The service provider.
 */
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

/**
 * A provider for the service BLoC.
 */
export const ServiceProvider = memo(Provider);
