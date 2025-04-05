import Fastify from 'fastify';
import fastifyMysql from '@fastify/mysql';

const PORT = 5000;
const fastify = Fastify({ logger: true });

fastify.register(fastifyMysql, {
  promise: true,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
});

fastify.post('/add-user', async (req, reply) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return reply.status(400).send({ success: false, message: 'Name and email are required' });
  }

  try {
    const result = await fastify.mysql.query(
      'INSERT INTO users (name, email) VALUES (?, ?)', 
      [name, email]
    );
    return reply.status(200).send({ success: true, message: 'User added successfully', userId: result.insertId });
  } catch (err) {
    fastify.log.error(err);
    return reply.status(500).send({ success: false, message: 'Error adding user', error: err.message });
  }
});
const start = async () => {
  try {
    await fastify.listen({ port: PORT });
    fastify.log.info(`Server listening at http://localhost:${PORT}`);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
