import {JsonPlaceHolderApi} from '../../jsonplaceholder/index.js';

try {
    const api = new JsonPlaceHolderApi();
    const res = await api.getPosts();
    console.log( res.data );
}
catch(err) {
    console.log("API Error");
}
