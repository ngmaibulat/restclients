# A set of REST API clients using Typescript and Axios

In other words -- these are set of wrappers around some publicly available APIs.

---

###  Install

`npm install @aibulat/restclients`

---

### Dependencies

The package has a single (direct) dependency: Axios
https://axios-http.com/docs/intro

---

### Platform Support

Just like Axios, this package can run on both Node and Browser platforms.

---

### Where is the code?

The package created by using Typescript.

Repository: https://github.com/ngmaibulat/restclients

---

### Where to submit feature requests and/or bugs?


https://github.com/ngmaibulat/restclients/issues

---

### List of wrapped APIs:

- https://jsonplaceholder.typicode.com
- https://reqres.in (in progress)

---

### Use jsonplaceholder.typicode.com - ESM modules

```js
import {JsonPlaceHolderApi} from '@aibulat/restclients/jsonplaceholder';

const api = new JsonPlaceHolderApi();
const res = await api.getPosts();
console.log( res.data );
```

---

### Use jsonplaceholder.typicode.com - CJS modules

```js
const {JsonPlaceHolderApi} = require('@aibulat/restclients/jsonplaceholder');

async function run()
{
    const api = new JsonPlaceHolderApi();
    const res = await api.getPhoto(1);
    console.log( res.data );    
}

run();

```

---

### Use jsonplaceholder.typicode.com - Methods

#### All methods are async:

```ts
getPosts()
getComments()
getAlbums()
getPhotos()
getTodos()
getUsers()

getPost(id: number)
getComment(id: number)
getAlbum(id: number)
getPhoto(id: number)
getTodo(id: number)
getUser(id: number)

getCommentsByPost(postid: number)

createPost(item: Post)
createComment(item: Comment)
createAlbum(item: Album)
createPhoto(item: Photo)
createTodo(item: Todo)
createUser(item: User)


updatePost(id: number, item: Post)
updateComment(id: number, item: Comment)
updatePhoto(id: number, item: Photo)
updateAlbum(id: number, item: Album)
updateTodo(id: number, item: Todo)
updateUser(id: number, item: User)


deletePost(id: number)
deleteComment(id: number)
deleteAlbum(id: number)
deletePhoto(id: number)
deleteTodo(id: number)
deleteUser(id: number)
```


### Use reqres.in

```
To be done
```
