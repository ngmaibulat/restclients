import {Post, Comment, Album, Photo, Todo, User} from '../../jsonplaceholder/index.js';
import {JsonPlaceHolderApi} from '../../jsonplaceholder/index.js';

async function run()
{
    const api = new JsonPlaceHolderApi();

    //Create
    
    const post: Post = {
        userId: 1,
        id: 1,
        title: "title",
        body: 'body'
    }
    
    /*
    Don't try to query the Updated Item
    It would be discarded
    And won't be persisted in something like a Database
    As https://jsonplaceholder.typicode.com is just for testing - Not a real service
    */
    
    /**
     * if you try to update non-existent Item
     * by providing non-existent ID
     * jsonplaceholder would end up with 500/HTTP error
     */
    
    const res = await api.updatePost(1, post);
    console.log( res.status );
    console.log( res.statusText );
    console.log( res.request.socket.servername );
    console.log( res.headers['date'] );
    console.log( res.data );  
    
    
    
    const user: User = {
        id: 11,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
          street: "Victor Plains",
          suite: "Suite 879",
          city: "Wisokyburgh",
          zipcode: "90566-7771",
          geo: {
            lat: -43.9509,
            lng: -34.4618
          }
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
          name: "Deckow-Crist",
          catchPhrase: "Proactive didactic contingency",
          bs: "synergize scalable supply-chains"
        }
    }
    
    const res2 = await api.updateUser(10, user);
    console.log( res2.status );
    console.log( res2.statusText );
    console.log( res2.request.socket.servername );
    console.log( res2.headers['date'] );
    console.log( res2.data );    
}

run()
  .catch(err => {
    console.log("API Error");
    console.log(err.cause);
  });