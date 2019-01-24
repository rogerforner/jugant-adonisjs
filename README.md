# Adonis fullstack

Fullstack boilerplate de AdonisJs, éste viene pre-configurado con:

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Descargar del repositorio

```bash
git clone https://github.com/rogerforner/tinker-adonisAuth.git adonisAuth
```

## Servidor HTTP

Ejecutar el servidor HTTP de desarrollo.

```bash
adonis serve --dev
```

> Si npm nos devuelve errores a la hora de instalar paquetes podría ser porqué se está ejecutando el servidor HTTP.

## Configuración

### Proveedor de emails

> [Documentación oficial](https://adonisjs.com/docs/4.1/mail)

Instalar el proveedor de emails.

```bash
adonis install @adonisjs/mail
```

Registrar el _provider_ en `start/app.js`.

```js
const providers = [
  '@adonisjs/mail/providers/MailProvider'
]
```

Insertamos los datos de configuración en del archivo _.env_.

_En nuestro caso utilizamos Mailtrap._

```bash
SMTP_HOST=smtp.mailtrap.io
MAIL_USERNAME=****
MAIL_PASSWORD=****
```

Los datos se utilizarán en `config/mail.js`.

```js
smtp: {
  driver: 'smtp',
  pool: true,
  port: 2525,
  host: Env.get('SMTP_HOST'),
  secure: false,
  auth: {
    user: Env.get('MAIL_USERNAME'),
    pass: Env.get('MAIL_PASSWORD')
  },
  maxConnections: 5,
  maxMessages: 100,
  rateLimit: 10
},
```

### Base de Datos

> [Documentación oficial](https://adonisjs.com/docs/4.1/database)

Instalamos el paquete mysql a través de npm.

```bash
npm i mysql --save
```

Insertamos los datos de configuración en del archivo _.env_.

_En nuestro caso utilizaremos mysql._

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=****
DB_DATABASE=adonisauth
```

## Creación de Modelos

Creamos un modelo PasswordReset con la línea de comandos adonis.

```bash
adonis make:model PasswordReset -m
```

## Migraciones

Generamos las tablas en la base de datos con adonis.

```bash
adonis migration:run
```

## Rutas

Creamos las rutas necesarias en `start/routes.js`.

```js
Route.get('register', 'Auth/RegisterController.showRegisterForm')
Route.post('register', 'Auth/RegisterController.register').as('register')
```