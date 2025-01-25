import type { default as Store } from '@ember-data/store';
import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class TodosRoute extends Route {
  @service declare store: Store;
  model() {
    return this.store.peekAll('todo');
  }
}
