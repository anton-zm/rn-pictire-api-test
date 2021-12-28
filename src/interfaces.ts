
export interface IPhoto {
    author: string,
    createdAt: Date,
    description: string,
    likes: number
    url: string,
    id: string,
    tags?: string[]
}

export enum Screens {
    INTRO = 'Intro',
    LOGIN = 'Login',
    MAIN = 'Main',
    ITEM = 'Item'
}