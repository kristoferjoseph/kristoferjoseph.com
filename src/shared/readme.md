# Automagical `src/shared` directory

The contents of `src/shared` get copied into each of your Begin app's Functions (at `node_modules/@architect/shared`) whenever you run:

- `npx sandbox` (which starts up your local dev environment)
- `npx hydrate` (which hydrates your Functions' dependencies)

This means the modules and files in this folder can be accessed from any function in your Begin app.

For example, here's how you'd require `src/shared/layout.js`:

```javascript
var layout = require('@architect/shared/layout')
```


## Organizing `src/shared`

Organize shared code however it makes sense for your project. Here are a few ideas:

- `src/shared/middleware`
- `src/shared/helpers`
- `src/shared/lib`

Also, feel free to overwrite the contents of this file to describe your project's shared code structure for your teammates.


## Use caution!

Everything in `src/shared` will be copied into all of your project's Functions, which has the potential to bloat your application and make it slow to start and execute.

Remember you want to keep your Functions sub-5MB for optimal coldstart performance.


## Note

You should feel free to delete this file and directory!
