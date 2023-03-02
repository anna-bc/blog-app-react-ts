import { Tag } from "./TagModel";
export type Post = {
    id: number,
    thumbnailUrls: string,
    title: string,
    content: string,
    creationDate: string,
    author: string,
    tags: Tag[],
};