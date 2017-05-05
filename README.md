GASP Collapsable Panel
============================

This project contains the necessary tools needed to create Bootstrap 4 collapsable panels (now cards ¯\\_(ツ)_/¯) using an Ember contextual component.

### Basic Usage
Using the `collapsable-panel`, you have acces to the three main sections of the panel: the header, the body and the footer. They are all optional, but of course -- without a body, you'll only end up with an empty `div` with the `card` class.

It's up to the developer to fill in the header, body and footer.

```hbs
{{#collapsable-panel as |panel|}}
    {#panel.header}}
        [...]
    {{/panel.header}}

    {#panel.body}}
        [...]
    {{/panel.body}}

    {#panel.footer}}
        [...]
    {{/panel.footer}}
{{/collapsable-panel}}
```

### Customizations
Some customizations are possible.

| Property       | Description          | Default Value |
|:-------------:|:-------------:|:-------------:|
| `collapsed` | Used to specify the panel's state; whether it is collapsed or not. | `false` |
| `collapsable` | Used to specify if the panel has the ability to collapse. | `true` |
| `collapseFooter` | Used to specify if the footer should collapse with the body when the user collapses the panel. | `true` |

```hbs
{{#collapsable-panel
    collapsed=false
    collapsable=true
    collapseFooter=true
    as |panel|
}}
    [...]
{{/collapsable-panel}}
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
