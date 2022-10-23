// deletePost(id: number)

import {Post, Comment, Album, Photo, Todo, User} from '../../jsonplaceholder/index.js';
import {JsonPlaceHolderApi} from '../../jsonplaceholder/index.js';

async function run()
{
    const api = new JsonPlaceHolderApi();
    const res = await api.deletePost(1);
    
    console.log( res.status );
    console.log( res.statusText );
}

run();


