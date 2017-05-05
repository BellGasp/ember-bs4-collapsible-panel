import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('panel-body', 'Integration | Component | panel body', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#panel-body}}
      body
    {{/panel-body}}
  `);

  assert.equal(this.$('.card-block').length, 1);
  assert.equal(this.$('.card-block').text().trim(), 'body');
});
