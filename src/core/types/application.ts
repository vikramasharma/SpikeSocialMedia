import type { BarState } from './bar';
import { postState } from './postState';
import { authState } from './auth';
import { postModalState } from './postModal';
import { profileModalState } from './profileModal';



export type ApplicationState = {
  _persist?: {
    rehydrated?: boolean;
  }
  bar: BarState;
  post: postState;
  auth: authState;
  postModal: postModalState;
  profileModal: profileModalState;

}
