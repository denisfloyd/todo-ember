import Model, { attr } from '@ember-data/model';

export default class TodoModel extends Model {
  @attr declare title: string;
  // todo
  @attr declare isCompleted: boolean;
}
