import type { Strings } from ".";

/**
 * The English strings for the application.
 */
const en: Strings = {
  header: {
    actions: {
      settings: "Settings",
      logout: "Logout",
    },
  },
  auth: {
    title: "Authentication",
    options: "Sign in options",
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
      go_to_services: "Services",
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
  services: {
    count: "Service count",
    fields: {
      id: "ID",
      name: "NAME",
      description: "DESCRIPTION",
    },
    actions: {
      create: "Create Service",
    },
  },
  theme: {
    light: "Light",
    dark: "Dark",
    auto: "System",
  },
};

export default en;
