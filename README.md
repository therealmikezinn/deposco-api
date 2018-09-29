# Deposco API

## Installation

```js
npm i deposco-api

yarn add deposco-api
```

## Usage

```js
const Deposco = require('deposco-api');

const client = Desposco({
    environment: '',
    tenantCode: '',
    username: '',
    password: '', 
});
```

## Resources and Methods

* container
  * bulkUpdate(data)
  * create(data)
  * get(id)
  * update(id, data)
