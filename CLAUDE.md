## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Dependencies

`package-lock.json` must carry the optional dependencies for *every* platform, not
just the one you are working on. CI runs `npm ci` on linux-x64, and that fails if the
lockfile was last written on Windows — npm prunes sharp's Linux-only packages, and the
deploy dies with `Missing: @emnapi/runtime@… from lock file`.

Running `npm install` on Windows re-introduces the problem. After changing any
dependency, regenerate the lockfile in a Linux container:

```
docker run --rm -v "${PWD}:/app" -w /app node:22 npm install --package-lock-only
```

Verifying with `npm ci` on Windows alone does not catch this — it is the same platform
that generated the lockfile, so it passes locally and still breaks CI. Check both.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
