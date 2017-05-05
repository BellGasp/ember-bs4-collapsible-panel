import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('collapsable-panel', 'Integration | Component | collapsable panel', {
  integration: true
});

test('it renders', function(assert) {

  // Template block usage:
  this.render(hbs`
    {{#collapsable-panel}}
      template block text
    {{/collapsable-panel}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
