# ngimport-ngresource [![Build Status][build]](https://circleci.com/gh/bcherny/ngimport-ngresource) [![npm]](https://www.npmjs.com/package/ngimport-ngresource) [![mit]](https://opensource.org/licenses/MIT)

[build]: https://img.shields.io/circleci/project/bcherny/ngimport-ngresource.svg?branch=master&style=flat-square
[npm]: https://img.shields.io/npm/v/ngimport-ngresource.svg?style=flat-square
[mit]: https://img.shields.io/npm/l/ngimport-ngresource.svg?style=flat-square

> ngResource support for [ngimport](https://github.com/bcherny/ngimport)

## Install

```sh
# Using Yarn:
yarn add ngimport-ngresource angular angular-resource

# Or, using NPM:
npm install ngimport-ngresource angular angular-resource --save
```

## Example

```js
import { $resource } from 'ngimport-ngresource'

let User = $resource('/user/:userId', { userId: '@id' })
let user = User.get({ userId: 123 }, () => {
  user.abc = true
  user.$save()
})
```

## License

MIT

## Running the tests

`npm test`
