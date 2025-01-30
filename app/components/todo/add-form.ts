import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import type { default as Store } from '@ember-data/store';
import { service } from '@ember/service';

export default class TodoAddForm extends Component {
  @tracked text: string = '';
  @service declare store: Store;

  @action
  addTodo(event: Event): void {
    event.preventDefault();
    if (!this.text.trim()) {
      alert('Todo cannot be empty');
      return;
    }

    this.store.createRecord('todo', {
      title: this.text,
      isCompleted: false,
    });

    this.text = '';
  }

  @action
  onChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }
}
