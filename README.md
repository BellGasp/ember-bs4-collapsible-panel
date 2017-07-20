# Ember Bootstrap 4 Collapsible Panel

[![npm version](https://badge.fury.io/js/ember-bs4-collapsible-panel.svg)](https://badge.fury.io/js/ember-bs4-collapsible-panel)
[![Ember Observer Score](https://emberobserver.com/badges/ember-bs4-collapsible-panel.svg)](https://emberobserver.com/addons/ember-bs4-collapsible-panel)
[![Build Status](https://travis-ci.org/BellGasp/ember-bs4-collapsible-panel.svg?branch=master)](https://travis-ci.org/BellGasp/ember-bs4-collapsible-panel)
[![Code Climate](https://codeclimate.com/github/BellGasp/ember-bs4-collapsible-panel/badges/gpa.svg)](https://codeclimate.com/github/BellGasp/ember-bs4-collapsible-panel)

This project contains the necessary tools needed to create Bootstrap 4 collapsible panels (now cards ¯\\_(ツ)_/¯) using an Ember contextual component.

### Basic Usage
Using the `collapsible-panel`, you have acces to the three main sections of the panel: the header, the body and the footer. They are all optional, but of course -- without a body, you'll only end up with an empty `div` with the `card` class.

It's up to the developer to fill in the header, body and footer.

```hbs
{{#collapsible-panel as |panel|}}
    {{#panel.header}}
        [...]
    {{/panel.header}}

    {{#panel.body}}
        [...]
    {{/panel.body}}

    {{#panel.footer}}
        [...]
    {{/panel.footer}}
{{/collapsible-panel}}
```

### Customizations
Some customizations are possible.

| Property       | Description          | Default Value |
|:-------------:|:-------------:|:-------------:|
| `collapsed` | Used to specify the panel's state; whether it is collapsed or not. | `false` |
| `collapsible` | Used to specify if the panel has the ability to collapse. | `true` |
| `collapseFooter` | Used to specify if the footer should collapse with the body when the user collapses the panel. | `true` |

```hbs
{{#collapsible-panel
    collapsed=false
    collapsible=true
    collapseFooter=true
    as |panel|
}}
    [...]
{{/collapsible-panel}}
```

| Property | Description | Default Value |
|:--------:|:-----------:|:-------------:|
| `defaultIcon` | Used to specify what class should be attached to the icon at the top right of the panel's header when the panel is in the expanded state. | `fa fa-minus` |
| `collapsedIcon` | Used to specify what class should be attached to the icon at the top right of the panel's header when the panel is in the collapsed state. | `fa fa-plus` |

```hbs
{{#panel-header
  defaultIcon="default-icon-class"
  collapsedIcon="collapsed-icon-class"
}}
    [...]
{{/panel-header}}
```
