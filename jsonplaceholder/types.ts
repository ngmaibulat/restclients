
interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

interface Comment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

interface Album {
    userId: number,
    id: number,
    title: string
}

interface Photo {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}


interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}


interface Geo {
    lat: number,
    lng: number
}


interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
}


interface Company {
    name: string,
    catchPhrase: string,
    bs: string
}


interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone:  string,
    website: string,
    company: Company
}


export {Post, Comment, Album, Photo, Todo, User}
