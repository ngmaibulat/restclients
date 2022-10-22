# A set of REST API clients using Typescript and Axios

In other words -- these are set of wrappers around some publicly available APIs.

###  Install

`npm install @aibulat/restclients`

### Dependencies

The package has a single (direct) dependency: Axios
https://axios-http.com/docs/intro

### Platform Support

Just like Axios, this package can run on both Node and Browser platforms.

### Where is the code?

The package created by using Typescript
Repository: https://github.com/ngmaibulat/restclients

### Where to submit feature requests and/or bugs?

https://github.com/ngmaibulat/restclients/issues

### List of wrapped APIs:

- https://jsonplaceholder.typicode.com

### Use jsonplaceholder.typicode.com

```
import {JsonPlaceHolderApi} from '@aibulat/restclients/jsonplaceholder/index.js';

const api = new JsonPlaceHolderApi();
const res = await api.getPosts();
console.log( res.data );
```

### Use reqres.in

```
To be done
```
