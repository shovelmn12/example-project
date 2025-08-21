import en from "./en";

export type Strings = {
  readonly header: {
    readonly actions: {
      readonly settings: string;
      readonly logout: string;
    };
  };
  readonly auth: {
    readonly title: string;
    readonly options: string;
    readonly actions: {
      readonly google: {
        readonly login: string;
        readonly signup: string;
      };
    };
  };
  readonly home: {
    readonly actions: {
      readonly go_to_profiles: string;
      readonly go_to_projects: string;
    };
  };
  readonly profiles: {
    readonly fields: {
      readonly id: string;
      readonly name: {
        readonly first: string;
        readonly last: string;
      };
    };
    readonly count: string;
    readonly actions: {
      readonly create: string;
    };
  };
  readonly projects: {
    readonly fields: {
      readonly id: string;
      readonly name: string;
      readonly description: string;
    };
    readonly count: string;
    readonly actions: {
      readonly create: string;
    };
  };
  readonly services: {
    readonly fields: {
      readonly id: string;
      readonly name: string;
      readonly description: string;
    };
    readonly count: string;
    readonly actions: {
      readonly create: string;
    };
  };
  readonly theme: {
    readonly light: string;
    readonly dark: string;
    readonly auto: string;
  };
};

export default { en };
