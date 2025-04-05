const Fastify = require('fastify');
const sequelize = require('./config/sequelize');
const User = require('./models/user');

const fastify = Fastify({ logger: true });

fastify.post('/users', async (request, reply) => {
  const { name, email } = request.body;

  try {
    const newUser = await User.create({ name, email });
    return reply.status(201).send(newUser);
  } catch (error) {
    console.error('Ошибка при добавлении пользователя:', error);
    return reply.status(500).send({ error: 'Не удалось создать пользователя' });
  }
});

const start = async () => {
  try {
    await fastify.listen({ port: 5000 });
    await sequelize.authenticate();
    console.log('Сервер запущен на http://localhost:5000');
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
