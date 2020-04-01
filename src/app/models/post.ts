import {Category} from './category';

export class Post {
  id: string;
  content: string;
  active: boolean;
  userlike: number;
  userdislike: number;
  // tslint:disable-next-line:variable-name
  created_at: Date;
  // tslint:disable-next-line:variable-name
  updated_at: Date;
  category: Category;
}
