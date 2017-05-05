import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('panel-footer', 'Integration | Component | panel footer', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#panel-footer}}
      footer
    {{/panel-footer}}
  `);

  assert.equal(this.$('.card-footer').length, 1);
  assert.equal(this.$('.card-footer').text().trim(), 'footer');
});
