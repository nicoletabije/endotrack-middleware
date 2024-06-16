exports.mediatorConfig = {
  urn: "urn:mediator:tutorial_scaffold",
  version: "1.0.0",
  name: "Scaffold Mediator",
  description: "Tutorial Scaffold Mediator",
  defaultChannelConfig: [
    {
      name: "Bootstrap Scaffold Mediator",
      urlPattern: "^/scaffold$",
      routes: [
        {
          name: "Bootstrap Scaffold Mediator Route",
          host: "scaffold",
          path: "/",
          port: "3000",
          primary: true,
          type: "http",
        },
      ],
      allow: ["admin"],
      methods: ["GET", "POST"],
      type: "http",
    },
  ],
  endpoints: [
    {
      name: "Bootstrap Scaffold Mediator Endpoint",
      host: "scaffold",
      path: "/",
      port: "3000",
      primary: true,
      type: "http",
    },
  ],
};
