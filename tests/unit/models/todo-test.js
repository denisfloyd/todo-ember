import { module, test } from 'qunit';
import { setupTest } from 'todo-ember/tests/helpers';

module('Unit | Model | rental', function (hooks) {
  setupTest(hooks);

  test('it has the right type', function (assert) {
    const store = this.owner.lookup('service:store');
    const todo = store.createRecord('todo', {
      todo: 'Todo app 1',
      isCompleted: false,
    });

    assert.strictEqual(todo.todo, 'Todo app 1');
  });
});
