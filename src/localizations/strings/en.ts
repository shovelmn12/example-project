import type { Strings } from ".";

const en: Strings = {
  auth: {
    actions: {
      google: {
        login: "Sign in with Google",
        signup: "Sign up with Google",
      },
    },
  },
  home: {
    actions: {
      go_to_profiles: "Profiles",
      go_to_projects: "Projects",
    },
  },
  profiles: {
    count: "Profile count",
    fields: {
      id: "ID",
      name: {
        first: "FIRST NAME",
        last: "LAST NAME",
      },
    },
    actions: {
      create: "Create Profile",
    },
  },
  projects: {
    count: "Project count",
    fields: {
      id: "ID",
      name: "NAME",
      description: "DESCRIPTION",
    },
    actions: {
      create: "Create Project",
    },
  },
  theme: {
    light: "Light",
    dark: "Dark",
  },
};

export default en;
