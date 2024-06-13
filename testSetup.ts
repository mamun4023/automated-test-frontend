import "@testing-library/jest-dom/vitest"
import 'cross-fetch/polyfill';

import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from './mock/server'
 
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())