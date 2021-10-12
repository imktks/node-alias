import "dotenv/config";
import fastify from "fastify";
import { SERVER_PORT } from "@config";
import { paymentProviders } from "@constants/providers";

const start = async () => {
  const server = fastify({ logger: true });

  server.get("/", async () => {
    return { hello: paymentProviders.foo };
  });

  try {
    await server.listen(SERVER_PORT);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
