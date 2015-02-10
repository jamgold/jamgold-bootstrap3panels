# Bootstrap-3 Panel-Group helper #

This is a very simple package that can help with the repetitive task of creating Bootstrap-3 panel-groups

The concept is easy, simply include the Bootstrap3Panels template in any of your templates and provide it an array or cursor of Bootstrap3Panel objects

```
{{>Bootstrap3Panels panels=<array of Bootstrap3Panel>}}
```

where Bootstrap3Panel is a simple object with

```
Bootstrap3Panel.prototype = {
  name: '',
  title: '',
  body: '',
};
```

which can optionally specify the boolean

```
expanded: true
```

to indicate that the panel should render in the expanded state.

There is one extra case where instead of a body you can supply an existing template

```
template: <name of existing template>
```

to render that template as the body of the panel.

There is a helper class called Bootstrap3Panel that can be used to instantiate panel items. Here are a couple of examples

```
new Bootstrap3Panel("name", "title", "body")
new Bootstrap3Panel({name: "name", body: "body", title:"title", expanded: true});
new Bootstrap3Panel("name", "title", {template: "template"});
```

The best way is to check out the examples directory
