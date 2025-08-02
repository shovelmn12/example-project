import en from "./en";

export type Strings = {
  readonly auth: {
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
};

export default { en };
