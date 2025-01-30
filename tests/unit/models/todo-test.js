import { module, test } from 'qunit';
import { setupTest } from 'todo-ember/tests/helpers';

module('Unit | Model | todo', function (hooks) {
  setupTest(hooks);

  test('it has the right type', function (assert) {
    const store = this.owner.lookup('service:store');
    const todo = store.createRecord('todo', {
      title: 'Todo app 1',
      isCompleted: false,
    });

    assert.strictEqual(todo.title, 'Todo app 1');
  });
});
