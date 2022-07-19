import { Application } from 'https://deno.land/x/oak/mod.ts'

const app: Application = new Application();
console.log('Server running on port 5000');

app.use(ctx => {
  ctx.response.body = 'Hello World!'
})
await app.listen({ port: 5000 })