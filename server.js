import Fastify from 'fastify';

const PORT = 5000;
const fastify = Fastify({ logger: true });  // Создайте экземпляр fastify с логированием

const start = async () => {
  try {
    await fastify.listen({port:PORT});
    fastify.log.info(`Server listening at http://localhost:${PORT}`);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
