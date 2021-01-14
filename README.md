# shopping-cart

### Resolución del problema

Se usaron las siguientes tecnologías, para dar solución al prblema planteado

-   Vue.js 2.6.12
-   Vuetify 2.4.2
-   vue-router - Para el uso de rutas
-   vuex - Para la comunicación entre los componentes
-   fetch para las llamadas api
-   funciones de actuales de ECMAScript

### Requerimientos mínimos

Node.js v12.18.3

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

# Fixes in technical_test

### add library

En el repositorio compartido llamado technical_test, instalar la siguiente dependencia, para evitar el bloqueo al consumir el servicio en el proyecto cliente.

```
npm install --save cors
```

Una vez agregado modificamos el archivo server.js y le agregamos las siguientes lineas de código

```javascript
const cors = require('cors')
app.use(cors())
```
