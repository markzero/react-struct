import { routesMapConfig } from './utils'

it('Creates routes map', () => {
  expect(routesMapConfig()[0]).toHaveProperty('path', '/about')
  expect(routesMapConfig()[1]).toHaveProperty('path', '/blog')
  expect(routesMapConfig()[2]).toHaveProperty('path', '/blog/:id')
})
