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
try {
    const api = new JsonPlaceHolderApi();
    const res = await api.getPosts();
    console.log( res.data );
}
catch(err) {
    console.log("API Error");
}
```

---

### Use jsonplaceholder.typicode.com - CJS modules

```js
const pkg = '@aibulat/restclients/jsonplaceholder';
const {JsonPlaceHolderApi} = require(pkg);

async function run()
{
    const api = new JsonPlaceHolderApi();
    const res = await api.getPhoto(1);
    console.log( res.data );    
}

run()
  .catch(err => {
    console.log("API Error");
    console.log(err.cause);
  });

```

---

### Use jsonplaceholder.typicode.com - Methods & Types

#### All methods are async:

```ts
getPosts(limit?: number)
getComments(limit?: number)
getAlbums(limit?: number)
getPhotos(limit?: number)
getTodos(limit?: number)
getUsers(limit?: number)


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

### TS Types

Some methods like createPost, updatePost need objects as parameters.
You can use interfaces below as blue-prints for objects you create and pass to methods.

```ts
interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

interface Comment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

interface Album {
    userId: number,
    id: number,
    title: string
}

interface Photo {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}


interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}


interface Geo {
    lat: number,
    lng: number
}


interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
}


interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}


interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone:  string,
    website: string,
    company: Company
}
```

### Use reqres.in

```
To be done
```
