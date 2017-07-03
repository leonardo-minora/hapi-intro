let app = require("../model/App");

module.exports = {
      method: "GET",
      path:"/",
      config: {
        tags: ["api"],
        handler: (request, reply) => {
          reply({
            info: app.info,
            versao: app.versao
          });
        }
      }
    };
