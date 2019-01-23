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

```js
adonis install @adonisjs/mail
```

Registrar el _provider_ en `start/app.js`.

```js
const providers = [
  '@adonisjs/mail/providers/MailProvider'
]
```