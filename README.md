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

## Configuración

### Proveedor de emails

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

Insertamos los datos para la configuración de nuestro proveedor, archivo _.env_. En nuestro caso utilizamos Mailtrap.

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