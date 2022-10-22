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

    async getCommentsByPost(postid: number)
    {
        const url = `/comments?postId=${postid}`;
        return api.get<Array<Comment>>(url);
    }


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

    async updatePost(id: number, item: Post)
    {
        const url = `/posts/${id}`;
        return api.put<Post>(url, item);
    }

    async updateComment(id: number, item: Comment)
    {
        const url = `/comments/${id}`;
        return api.put<Comment>(url, item);
    }

    async updatePhoto(id: number, item: Photo)
    {
        const url = `/photos/${id}`;
        return api.put<Photo>(url, item);
    }

    async updateAlbum(id: number, item: Album)
    {
        const url = `/albums/${id}`;
        return api.put<Album>(url, item);
    }

    async updateTodo(id: number, item: Todo)
    {
        const url = `/todos/${id}`;
        return api.put<Todo>(url, item);
    }

    async updateUser(id: number, item: User)
    {
        const url = `/users/${id}`;
        return api.put<User>(url, item);
    }


    //Delete

    async deletePost(id: number)
    {
        const url = `/posts/${id}`;
        return api.delete<Post>(url);
    }

    async deleteComment(id: number)
    {
        const url = `/comments/${id}`;
        return api.delete<Comment>(url);
    }

    async deleteAlbum(id: number)
    {
        const url = `/albums/${id}`;
        return api.delete<Album>(url);
    }

    async deletePhoto(id: number)
    {
        const url = `/photos/${id}`;
        return api.delete<Photo>(url);
    }

    async deleteTodo(id: number)
    {
        const url = `/todos/${id}`;
        return api.delete<Todo>(url);
    }

    async deleteUser(id: number)
    {
        const url = `/users/${id}`;
        return api.delete<User>(url);
    }

}

export {JsonPlaceHolderApi}
