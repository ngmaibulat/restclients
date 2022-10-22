# A set of REST API clients using Typescript and Axios

In other words -- these are set of wrappers around some publicly available APIs.

###  Install

`npm install @aibulat/restclients`

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
