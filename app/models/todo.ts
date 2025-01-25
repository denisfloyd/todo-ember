import Model, { attr } from '@ember-data/model';

export default class TodoModel extends Model {
  @attr declare todo: string;
  // todo
  @attr declare isCompleted: boolean;
}
