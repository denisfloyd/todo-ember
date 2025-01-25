import Component from '@glimmer/component';
import type { default as Store } from '@ember-data/store';
import { service } from '@ember/service';
import { action } from '@ember/object';
import type TodoModel from 'todo-ember/models/todo';

export default class TodoList extends Component {
  @service declare store: Store;

  @action
  toggleComplete(todo: TodoModel): void {
    todo.isCompleted = !todo.isCompleted;
  }

  @action
  removeTodo(todo: TodoModel): void {
    this.store.deleteRecord(todo);
  }
}
