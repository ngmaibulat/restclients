import {JsonPlaceHolderApi} from '../jsonplaceholder/index.js';

const api = new JsonPlaceHolderApi();

const res1 = await api.getPosts();
console.log(res1.data);

const res2 = await api.getComments();
console.log(res2.data);

const res3 = await api.getPhoto();
console.log(res3.data[0]);

const res4 = await api.getTodos();
console.log(res4.data[0]);

const res5 = await api.getUsers();
console.log(res5.data[0]);
