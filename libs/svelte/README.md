## Writing stories

-   Default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
-   Args: https://storybook.js.org/docs/svelte/writing-stories/args
-   Arg types: https://storybook.js.org/docs/svelte/api/argtypes
-   Component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args

## Note

-   To fix tailwind/storybook integration, autoprefixer dependency was downgraded to 9.0.0
    // https://github.com/parcel-bundler/parcel/issues/5160

-   Try to replace webpack builder with vite in root /storybook/main.js

-   If some Tailwind dynamic class does not work, please, check ./tailwind.config > purge > options
    // https://github.com/statamic/cms/discussions/4491

-   To add/change custom favicon go to ./.storybook/manager-head.html file
    // https://storybook.js.org/docs/react/configure/story-rendering

-   To control the layout of storybooks UI, add/change logo and brand link go to ./.storybook/manager.js file
    // https://storybook.js.org/docs/react/configure/features-and-behavior

-   All svelte component props (export let ...) should have a jsdoc comment. That has a description and either @default 'the default value' or @required

    Example:

```ts
/**
 * Button size: x-small, small, medium, large, x-large
 * @default medium
 */
export let size: Size = 'medium';
/**
 * The name of the icon
 * @required
 */
export let name: Icon;
```

-   All svelte scripts should have lang="ts"

-   If a prop can only be a set of specific values add the types in types/components.ts

-   Have all the folders in the src be camelCase (starts with a lower case)
