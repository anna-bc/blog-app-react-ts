import { Tag } from "./TagModel";
export type Post = {
    id: string,
    thumbnailUrl: string,
    title: string,
    content: string,
    creationDate: string,
    author: string,
    tags?: Tag[],
};