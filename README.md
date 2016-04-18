# react-no-webpack-required

This is an example repository that demonstrates how you can run React without the need for Babel, Webpack and any of the other libraries people commonly tend to set up in React applications.

## Who is this for?

If you want to just play with React and forget about tooling, ES2015 features and JSX compilation, this is for you.

Because there's no JSX you need to call functions to create your DOM elements, but I've wrapped `React.createElement` in a global `h` function that should help:

```jsx
h('p', 'Hello World') => <p>Hello World</p>
h(MyComponent, { name: 'jack' }) => <MyComponent name="jack' />
h('div', [
  h('p', 'Hey')
]); => <div><p>Hey</p</div>
```

## Available gulp tasks

- `gulp build` : concat all files together into `build/dev.js`
- Run `NODE_ENV=production gulp build` to get a minified `build/prod.js`.
- `gulp watch` : watches `vendor/` and `src/` and rebuilds on a file change.
- `gulp serve` : creates a live server on port 8004 (or run `PORT=8000 gulp serve`). This will reload the page on any file changes.


## Do you hate Webpack?

No! I love Webpack and use it for a lot of projects. What I've found is that when people are new to React they tend to get bogged down in the tooling and setting up Babel + Webpack is not entirely straight forward.

If you're willing to forgo JSX and use a little helper function to create your HTML, you don't even need a transpiler.

## No modules?

I love using a module system, whether that's CommonJS or ES2015, but it's another thing people often aren't familiar with. In the "old" days we used to store all our "modules" in a global object, and that's what this repo does. It might not be today's best practice, but it's definitely good enough for people getting started.


## Commiting dependencies?!

Like I said, this repo tries to avoid all tooling that might cause issues, and by avoiding npm modules we can not have to do any transpilation or browserifying. If you wanted to you could use Bower or similar, or "upgrade" this repo to use npm.

## Should I use this for production?!

Maybe? You'll need to write your own deployment stuff, but you can run `NODE_ENV=production gulp build` to get a minified build sorted.
