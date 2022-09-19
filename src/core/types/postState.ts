import { SliceMeta } from './meta';


export type postState = SliceMeta & {
    posts: {
        [key: string]: {
                date: string,
                message: string,
                name: string,
                title: string,
                bio: string,
        },
    },
    isLoading: boolean,
}

