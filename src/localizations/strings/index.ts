import en from "./en";

export type Strings = {
  readonly home: {
    readonly actions: {
      readonly go_to_users: string;
    };
  };
  readonly users: {
    readonly fields: {
      readonly id: string;
      readonly email: string;
    };
    readonly count: string;
    readonly actions: {
      readonly create: string;
    };
  };
};

export default { en };
