const Fastify = require('fastify');
const sequelize = require('./config/sequelize');
const User = require('./models/user');
const Employee = require('./models/employee')
const PORT = 5005
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

fastify.get('/users', async (request, reply) => {
  try {
    const users = await User.findAll();
    return reply.status(200).send(users);
  } catch (error) {
    console.error('Ошибка при получении пользователей:', error);
    return reply.status(500).send({ error: 'Не удалось получить пользователей' });
  }
});

fastify.get('/users/id/:id', async (request, reply) => {
  const {id} = request.params
  try {
    const users = await User.findOne({where:{id}});
    return reply.status(200).send(users);
  } catch (error) {
    console.error('Ошибка при получении пользователей:', error);
    return reply.status(500).send({ error: 'Не удалось получить пользователей' });
  }
});

fastify.get('/users/name/:name',async (request,reply) => {
  const {name} = request.params
  try {
    const users = await User.findAll({where:{name}})
    return reply.status(200).send(users);
  } catch (error) {
    console.error('Ошибка при получении пользователей:', error);
    return reply.status(500).send({ error: 'Не удалось получить пользователей' });
  }
})
fastify.get('/users/names', async (request, reply) => {
  try {
    const users = await User.findAll({
      attributes: ['name']
    });
    if (users.length === 0) {
      return reply.status(404).send({ error: 'Пользователи не найдены' });
    }
    const names = users.map(user => user.name);

    return reply.status(200).send(names);
  } catch (error) {
    console.error('Ошибка при получении пользователей:', error);
    return reply.status(500).send({ error: 'Не удалось получить имена пользователей' });
  }
});
  fastify.get('/', async (request, reply) => {
    return { message: 'Server is running' };
  });

fastify.post('/employee/add',async (request,reply) => {
  const {firstName,lastName} = request.body;
  console.log(request.body);
  try {
    if (!firstName) {
      return reply.status(400).send({ error: 'First name is required' });
    }
    const newEmployee = await Employee.create({firstName,lastName})
    return reply.status(201).send(newEmployee);
  } catch (error) {
        console.error('Ошибка при добавлении пользователя:', error);
    return reply.status(500).send({ error: 'Не удалось создать пользователя' });
    
  }
})

fastify.get('/get-employees',async(request,reply) => {
  try {
    const employee = await Employee.findAll()
    return reply.status(200).send(employee)
  } catch (error) {
            console.error('Ошибка при добавлении пользователя:', error);
    return reply.status(500).send({ error: 'Не удалось создать пользовате'})
  }
})

const start = async () => {
  try {
    await fastify.listen({ port: PORT });
    await sequelize.authenticate();
    console.log(`Сервер запущен на http://localhost:${PORT}`);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
