Clase 21

---

-   Authenticacion por terceros >> utilizando passport-github
-   Authenticacion usando JWT
-   Creacion de un login por medio de JWT

---

AUTHENTICACION POR TERCEROS :

-   Lo que permite en este caso por medio de GITHUB, es habilitar la posibilidad de usar una app, directamente desde el sector de developer settings.

*   HomePage URL : host y puerto declarados en el proyecto
*   Callback URL :
*   Github > Profile > Settings > Developer Settings // Configurar APP para usarlo dentro de nuestra APP >> dependecia a usar [PASSPORT GITHUB2](https://www.passportjs.org/packages/passport-github2/)

*   **[DOCUMENTACION RECOMENDADA](https://dev.to/joshuajee/nodejs-github-authentication-using-passportjs-and-mongodb-2lfd)**

## Steps

-   GENERAR LA APP EN GITHUB
-   GENERAR LA LOGICA DE PASSPORT GITHUB
-   GENERAR LAS MODIFICACIONES NECESARIAS PARA EL LOGIN PAGE
-   GENERAR UN ENDPOINT PARA TRIGGER DE PASSPORT ^ EL GITHUB SESSIONS

---

JWT

-   [Info adicional de lo que es un JWT](https://jwt.io/introduction)
-   [JWT NODEJS](https://bluuweb.github.io/node/07-jwt/#jwt-2)

---

Partes que se agregaron del proyecto:

-   config.jwt.js
-   config.passwords.js
-   password.init.js
-   password.github.js

Middleware

-   auth.middleware.js (me permite usar como metodo de validacion de token)
