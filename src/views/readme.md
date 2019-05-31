# The `src/views` directory

By default the contents of `src/views` gets copied into each of your Begin app's `@http` `GET` functions (at `node_modules/@architect/views`) whenever you run:

- `npx sandbox` (which starts up your local dev environment)
- `npx hydrate` (which hydrates your Functions' dependencies)

This means the modules and files in this folder can be accessed from any `@http` `GET` function in your Begin app.

For example, here's how you'd require `src/views/layout.js`:

```javascript
var layout = require('@architect/views/layout')
```


## How is this different from `src/shared`?

`src/views` makes it easy to share view components, layouts, and other frontend-facing files that might otherwise bloat your projects' various Functions.

`src/shared` is great for sharing files that every part of your app may need, like common libraries, authentication modules, etc.


## Use caution!

Everything in `src/views` will be copied into all of your project's `@http` `GET` Functions, which has the potential to bloat your application and make it slow to start and execute.

Remember you want to keep your Functions sub-5MB for optimal coldstart performance.


## Note

You should feel free to delete this file and directory!
