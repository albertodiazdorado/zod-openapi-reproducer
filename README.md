# zod-openapi strange types behavior reproducer

This project demonstrates that it is very easy to create a project that compiles correctly but fails at runtime if using `zod-openapi`.
To execute the demo, reproducer:

```sh
pnpm install --no-save
pnpm compile # works
pnpm start   # fails
```

Now you can navigate to `main.ts` and uncomment the line `import "zod-openapi/extend";`.
If you execute the previous commands again, both "compile" and "start" will execute correctly.

## Possible explanation

The reason for the successful compilation is the existance of `standalone.ts` which imports `zod-openapi`.
Note that we:
1. Do nothing with the import in `standalone.ts`. It just _exists_.
2. `standalone.ts` is completely independent from `main.ts`. There are no imports in either direction.

However, if you comment out the content of `standalone.ts` (or just delete the file), then `pnpm compile` will not work.