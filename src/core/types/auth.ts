import { SliceMeta } from './meta';


export type authState = SliceMeta & {
    value: string,
    loggedIn: boolean,
}
