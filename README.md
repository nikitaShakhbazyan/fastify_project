Сначала нужно установить Sequelize CLI и Sequelize:

npm install --save sequelize
npm install --save-dev sequelize-cli


Для инициализации проекта с Sequelize нужно выполнить команду:

npx sequelize-cli init


Эта команда создаст несколько директорий и файлов:

config/config.json — настройки для подключения к базе данных.
models/ — каталог для моделей Sequelize.
migrations/ — каталог для миграций.
seeders/ — каталог для начальных данных (seeders).


Шаг 3: Конфигурация подключения
Отредактируйте файл config/config.json, чтобы указать настройки для вашей базы данных (например, для MySQL):

Шаг 4: Создание миграции
Чтобы создать миграцию, используйте команду:

npx sequelize-cli migration:generate --name create-users

Шаг 5: Редактирование миграции


Шаг 6: Применение миграции
Чтобы применить миграции и синхронизировать таблицы с базой данных, используйте команду:

npx sequelize-cli db:migrate