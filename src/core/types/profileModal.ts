import { SliceMeta } from './meta';


export type profileModalState = SliceMeta & {
    isOpen: boolean,
    postInfo: {
        name: string,
        date: string,
        title: string,
        imgurl: string,
        bio: string,
    }
}
