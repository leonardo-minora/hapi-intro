module.exports =     {
      method: "GET",
      path: "/estado",
      config: {
        tags: ["api"],
        handler: (request, reply) => {
          reply({
            estado: "online"
          });
        }
      }
    };
