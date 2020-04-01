import {Post} from './post';

export class User {
  id: string;
  username: string;
  email: string;
  password: string;
  // tslint:disable-next-line:variable-name
  is_admin: boolean;
  active: boolean;
  // tslint:disable-next-line:variable-name
  created_at: Date;
  // tslint:disable-next-line:variable-name
  updated_at: Date;
  postslikes: Post;
  postsdislikes: Post;
}
