import {AxiosError, Post, Comment, Album, Photo, Todo, User} from '../../../jsonplaceholder/index.js';
import {JsonPlaceHolderApi} from '../../../jsonplaceholder/index.js';

async function run()
{
    const api = new JsonPlaceHolderApi();
    let res: any;
    
    res = await api.getPosts(2);
    console.log(res.data[0]);
    
    res = await api.getComments(2);
    console.log(res.data[0]);
    
    res = await api.getPhotos(2);
    console.log(res.data[0]);
    
    res = await api.getTodos(2);
    console.log(res.data[0]);
    
    res = await api.getUsers(2);
    console.log(res.data[0]);
    
    
    //get One
    res = await api.getPost(1);
    console.log( res.data );
    
    res = await api.getAlbum(1);
    console.log( res.data );
    
    res = await api.getComment(1);
    console.log( res.data );
    
    res = await api.getPhoto(1);
    console.log( res.data );
    
    res = await api.getTodo(1);
    console.log( res.data );
    
    res = await api.getUser(1);
    console.log( res.data );


}

try {
    await run();
}
catch(err) {
    //do some error handling
    // console.log(err?.constructor?.name);

    if (err instanceof AxiosError) {
        // console.log("cause:", err.cause);
        // console.log("msg:", err.message);

        if (err.code == "ENOTFOUND") {
            console.error("DNS or Internet Connection Error");
        }
    }
    else {
        console.error("Unknown API Error");
    }
}
