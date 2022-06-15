import { Application } from "https://deno.land/x/abc@v1.0.0-rc10/mod.ts";

const app: Application = new Application();

app
  .get("/:name", ( ctx ) => {
    let { response: res, request: req } = ctx
    res.body = "Hello!"
  })
  .start({ port: 8000 });