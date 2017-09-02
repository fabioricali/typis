<div align="center">
<h1>typis</h1>
Detects object type.
<br/><br/>
<a href="https://travis-ci.org/fabioricali/typis" target="_blank"><img src="https://travis-ci.org/fabioricali/typis.svg?branch=master" title="Build Status"/></a>
<a href="https://coveralls.io/github/fabioricali/typis?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/fabioricali/typis/badge.svg?branch=master" title="Coverage Status"/></a>
<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT"/></a>
<img src="https://img.shields.io/badge/team-terrons-orange.svg" title="Team Terrons"/>
</div>

## Installation

### Node.js
```
npm install typis --save
```

## Example

```javascript
const type = require('typis');

console.log(type.get([])); //=> Array;
console.log(type.get(123)); //=> Number;
console.log(type.get(true)); //=> Boolean;

console.log(type.is(123, 'boolean')); //=> false;

// Throw an error
type.throw(123, 'boolean'); //=> error;
```

## API
See <a href="https://github.com/fabioricali/typis/blob/master/api.md">full documentation</a>

## Changelog
You can view the changelog <a target="_blank" href="https://github.com/fabioricali/typis/blob/master/CHANGELOG.md">here</a>

## License
typis is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>