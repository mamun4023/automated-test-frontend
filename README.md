# React + TypeScript + Vite

Here, All the automated testing technique is applied with the production ready component.


# Testing Setup

Follow the instruction step by step to reach ultimate goal.

### Create React vite project with TypeScript & Install 

```bash
    npm create vite@latest
    npm install 
```

### Install Vitest as a dev dependency 

```bash
    npm install -D vitest
```


### Update package.json file (add two key value into scripts)


```json
    "scripts": {
      "test": "vitest",
      "test:ui": "vitest --ui"
    }
```



### Install necessary libraries
 ```bash
    npm i -D @testing-library/jest-dom
    npm i -D @testing-library/react
    npm i -D jsdom
    npm i -D msw@latest
    npm i -D cross-fetch/polyfill
  ```


### Configuration of setup file (create a testSetup.ts file and put bellow code)


```js
    import "@testing-library/jest-dom/vitest"
    import 'cross-fetch/polyfill';
    import { beforeAll, afterEach, afterAll } from 'vitest'
    import { server } from './mock/server'

    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

```

### Add testSetup.ts file into vitest.config.ts file

```js
    import {defineConfig} from 'vitest/config'

    export default defineConfig({
        test : {
            environment : 'jsdom',
            globals : true,
            setupFiles : "testSetup.ts"
        }
    })
```

### Create mock server

  server.ts

```js
  import {setupServer} from 'msw/node'
  import {handlers} from './handlers'

  export const server = setupServer(...handlers)

  server.events.on('request:start', ({ request }) => {
      console.log('MSW intercepted:', request.method, request.url)
  })

```

handlers.ts

```js

 import { http, HttpResponse } from 'msw'
 
  export const handlers = [
    http.get('/users', () => {
      return HttpResponse.json({
        id: '1',
        firstName: 'Tohid',
        lastName: 'Hasan',
      })
    }),
  ]

```