export interface IPhoto {
    author: string,
    createdAt: Date,
    description: string,
    likes: number
    url: string,
    id: string,
    tags?: string[]
}