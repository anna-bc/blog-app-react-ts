import { Post } from "./PostModel"

export type Action = {
    type: string,
    payload?: {
        post?: Post,
    },
}