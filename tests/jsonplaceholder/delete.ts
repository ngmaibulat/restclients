// deletePost(id: number)

import {Post, Comment, Album, Photo, Todo, User} from '../../lib/index.js';
import {JsonPlaceHolderApi} from '../../lib/index.js';

const api = new JsonPlaceHolderApi();

const res = await api.deletePost(1);

console.log( res.status );
console.log( res.statusText );

