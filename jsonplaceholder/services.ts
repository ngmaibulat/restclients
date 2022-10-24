import {Post, Comment, Album, Photo, Todo, User} from './types.js';
import axios from 'axios';
import {AxiosInstance} from 'axios';

class JsonPlaceHolderApi
{
    api: AxiosInstance;

    constructor()
    {
        this.api = axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com',
            // timeout: 1000,
            // headers: {'X-Custom-Header': 'foobar'}
        });
    }

    getLimit(limit?: number)
    {
        let config;

        if (limit) {
            config = {
                params: {
                    _limit: limit
                }
            }
        }

        return config;
    }

    async getPosts(limit?: number)
    {
        const config = this.getLimit(limit);
        const url = '/posts';
        return this.api.get<Array<Post>>(url, config);
    }
    
    async getComments(limit?: number)
    {
        const config = this.getLimit(limit);
        const url = '/comments';
        return this.api.get<Array<Comment>>(url, config);
    }

    async getAlbums(limit?: number)
    {
        const config = this.getLimit(limit);
        const url = '/albums';
        return this.api.get<Array<Album>>(url, config);
    }

    async getPhotos(limit?: number)
    {
        const config = this.getLimit(limit);
        const url = '/photos';
        return this.api.get<Array<Photo>>(url, config);
    }

    async getTodos(limit?: number)
    {
        const config = this.getLimit(limit);
        const url = '/todos';
        return this.api.get<Array<Todo>>(url, config);
    }

    async getUsers(limit?: number)
    {
        const config = this.getLimit(limit);
        const url = '/users';
        return this.api.get<Array<User>>(url, config);
    }


    //Get One Item from REST API - get by id

    async getPost(id: number)
    {
        const url = `/posts/${id}`;
        return this.api.get<Post>(url);
    }

    async getComment(id: number)
    {
        const url = `/comments/${id}`;
        return this.api.get<Comment>(url);
    }

    async getAlbum(id: number)
    {
        const url = `/albums/${id}`;
        return this.api.get<Album>(url);
    }

    async getPhoto(id: number)
    {
        const url = `/photos/${id}`;
        return this.api.get<Photo>(url);
    }

    async getTodo(id: number)
    {
        const url = `/todos/${id}`;
        return this.api.get<Todo>(url);
    }

    async getUser(id: number)
    {
        const url = `/users/${id}`;
        return this.api.get<Post>(url);
    }



    //Get By

    async getCommentsByPost(postid: number)
    {
        const url = `/comments?postId=${postid}`;
        return this.api.get<Array<Comment>>(url);
    }


    //Create

    async createPost(item: Post)
    {
        const url = '/posts';
        return this.api.post<Post>(url, item);
    }

    async createComment(item: Comment)
    {
        const url = '/comments';
        return this.api.post<Comment>(url, item);
    }

    async createAlbum(item: Album)
    {
        const url = '/albums';
        return this.api.post<Album>(url, item);
    }

    async createPhoto(item: Photo)
    {
        const url = '/photos';
        return this.api.post<Photo>(url, item);
    }

    async createTodo(item: Todo)
    {
        const url = '/todos';
        return this.api.post<Todo>(url, item);
    }

    async createUser(item: User)
    {
        const url = '/users';
        return this.api.post<User>(url, item);
    }


    //Update

    async updatePost(id: number, item: Post)
    {
        const url = `/posts/${id}`;
        return this.api.put<Post>(url, item);
    }

    async updateComment(id: number, item: Comment)
    {
        const url = `/comments/${id}`;
        return this.api.put<Comment>(url, item);
    }

    async updatePhoto(id: number, item: Photo)
    {
        const url = `/photos/${id}`;
        return this.api.put<Photo>(url, item);
    }

    async updateAlbum(id: number, item: Album)
    {
        const url = `/albums/${id}`;
        return this.api.put<Album>(url, item);
    }

    async updateTodo(id: number, item: Todo)
    {
        const url = `/todos/${id}`;
        return this.api.put<Todo>(url, item);
    }

    async updateUser(id: number, item: User)
    {
        const url = `/users/${id}`;
        return this.api.put<User>(url, item);
    }


    //Delete

    async deletePost(id: number)
    {
        const url = `/posts/${id}`;
        return this.api.delete<Post>(url);
    }

    async deleteComment(id: number)
    {
        const url = `/comments/${id}`;
        return this.api.delete<Comment>(url);
    }

    async deleteAlbum(id: number)
    {
        const url = `/albums/${id}`;
        return this.api.delete<Album>(url);
    }

    async deletePhoto(id: number)
    {
        const url = `/photos/${id}`;
        return this.api.delete<Photo>(url);
    }

    async deleteTodo(id: number)
    {
        const url = `/todos/${id}`;
        return this.api.delete<Todo>(url);
    }

    async deleteUser(id: number)
    {
        const url = `/users/${id}`;
        return this.api.delete<User>(url);
    }

}

export {JsonPlaceHolderApi}
