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

    async getPhotos()
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


    //Get One Item from REST API - get by id

    async getPost(id: number)
    {
        const url = `/posts/${id}`;
        return api.get<Post>(url);
    }

    async getComment(id: number)
    {
        const url = `/comments/${id}`;
        return api.get<Comment>(url);
    }

    async getAlbum(id: number)
    {
        const url = `/albums/${id}`;
        return api.get<Album>(url);
    }

    async getPhoto(id: number)
    {
        const url = `/photos/${id}`;
        return api.get<Photo>(url);
    }

    async getTodo(id: number)
    {
        const url = `/todos/${id}`;
        return api.get<Todo>(url);
    }

    async getUser(id: number)
    {
        const url = `/users/${id}`;
        return api.get<Post>(url);
    }



    //Get By


    //Create

    async createPost(item: Post)
    {
        const url = '/posts';
        return api.post<Post>(url, item);
    }

    async createComment(item: Comment)
    {
        const url = '/comments';
        return api.post<Comment>(url, item);
    }

    async createAlbum(item: Album)
    {
        const url = '/albums';
        return api.post<Album>(url, item);
    }

    async createPhoto(item: Photo)
    {
        const url = '/photos';
        return api.post<Photo>(url, item);
    }

    async createTodo(item: Todo)
    {
        const url = '/todos';
        return api.post<Todo>(url, item);
    }

    async createUser(item: User)
    {
        const url = '/users';
        return api.post<User>(url, item);
    }


    //Update


    //Delete

}

export {JsonPlaceHolderApi}
