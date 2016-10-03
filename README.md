# React Library Starter

This project is designed to be used as a starting place for creating a React library/component to share with others (e.g., through [npm](http://npmjs.com/) for instance). Just download the repo as a zip and edit as you like. The design was influenced by [library-boilerplate](https://github.com/gaearon/library-boilerplate) and [Redux](https://github.com/reactjs/react-redux).

#### Includes

- [Jest](https://facebook.github.io/jest/) for testing
- [GitBook](https://www.gitbook.com) for docs. [Sample generated docs](https://pbeshai.github.io/react-library-starter/).
- [Travis CI](https://travis-ci.org/) configuration
- [AirBnB eslint](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) with a couple rule changes
- CommonJS and UMD build targets
- Examples with [Create React App](https://github.com/facebookincubator/create-react-app)

*[Storybook](https://github.com/kadirahq/react-storybook) coming soon...*


#### Sample README

What follows below is a sample README you could consider using for your project.

# react-library-starter

[![npm version](https://badge.fury.io/js/react-library-starter.svg)](https://badge.fury.io/js/react-library-starter)
[![Build Status](https://travis-ci.org/react-library-starter-author/react-library-starter.svg?branch=master)](https://travis-ci.org/react-library-starter-author/react-library-starter)

Description of your library.

For details on how to use it, read the [docs](https://react-library-starter-author.github.io/react-library-starter) or browse the [examples](https://github.com/react-library-starter-author/react-library-starter/tree/master/examples).

### Installation

```
npm install --save react-library-starter
```

### How do I use it?

Describe how to use your library in code with an example.

### Examples

- [simple](https://github.com/react-library-starter-author/react-library-starter/tree/master/examples/simple) - A simple example


### Development

During development of examples, it can be helpful to have a watch running automatically rebuilding the package when changes take place. To get this running run:

```
npm run dev
```

#### Building

```
npm run build
```

#### Linting

```
npm run lint
```

To lint examples, run:

```
npm run lint:examples
```

#### Testing

```
npm run test
```

To test examples, run:

```
npm run test:examples
```

### Working on docs

When editing the docs, it helps to have a dev server watching changes. To do this, run:

```
npm run docs:watch
```

To build the docs, run:

```
npm run docs:build
```

To publish the docs, run:

```
npm run docs:publish
```


### License

MIT
