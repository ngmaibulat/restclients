import {Post, Comment, Album, Photo, Todo, User} from './types.js';
import {api} from './axios.js';

class JsonPlaceHolderApi
{
    async getPosts()
    {
        const url = '/posts';
        return api.get<Array<Post>>(url);
    }
    
    async getComments()
    {
        const url = '/comments';
        return api.get<Array<Comment>>(url);
    }

    async getAlbums()
    {
        const url = '/albums';
        return api.get<Array<Album>>(url);
    }

    async getPhoto()
    {
        const url = '/photos';
        return api.get<Array<Photo>>(url);
    }

    async getTodos()
    {
        const url = '/todos';
        return api.get<Array<Todo>>(url);
    }

    async getUsers()
    {
        const url = '/users';
        return api.get<Array<User>>(url);
    }
}

export {JsonPlaceHolderApi}

