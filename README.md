# react-expand-collapse

A simple and customizable expand-collapse react component for the web.

* **Customizable** - Easy to customize button state and text.
* **Lightweight** - Less than 5kb of size. No dependencies other than _prop-types_.


## Demo

[Demo Link](https://dutiyesh.github.io/react-expand-collapse/)

## Installation

```bash
npm install react-expand-collapse
```

## Usage
> Important: Make sure to include the [css file](https://github.com/dutiyesh/react-expand-collapse/blob/master/examples/src/expand-collapse.css) or feel free to create your own.

```js
import React from 'react';
import ExpandCollapse from 'react-expand-collapse';

class MovieInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>Inception</h4>
        <ExpandCollapse
          previewHeight="88px"
        >
          Visionary filmmaker Christopher Nolan (Memento, The Dark Knight) writes and directs this psychological sci-fi action film about a thief who possesses the power to enter into the dreams of others. Dom Cobb (Leonardo DiCaprio) doesn't steal things, he steals ideas. By projecting himself deep into the subconscious of his targets, he can glean information that even the best computer hackers can't get to. In the world of corporate espionage, Cobb is the ultimate weapon. But even weapons have their weakness, and when Cobb loses everything, he's forced to embark on one final mission in a desperate quest for redemption. This time, Cobb won't be harvesting an idea, but sowing one. Should he and his team of specialists succeed, they will have discovered a new frontier in the art of psychic espionage. They've planned everything to perfection, and they have all the tools to get the job done. Their mission is complicated, however, by the sudden appearance of a malevolent foe that seems to know exactly what they're up to, and precisely how to stop them. ~ Jason Buchanan, Rovi
        </ExpandCollapse>
    );
  }
}
```

## API

| Prop  | Type | Default | Description
| -------------- | ------------- | ------------- | ------------- |
| previewHeight  | string  | **Required**  | The height of component in collapsed state.  |
| children  | node  | **Required**  | Element to render inside the component.  |
| className  | string  | `''`  | A custom class will be applied to the root of `ExpandCollapse`. |
| expanded  | bool  | `false`  | If `true`, the component is in expanded state. If `false`, it is in collapsed state.  |
| expandText  | string  | `Expand`  | The text shown in expanded state.  |
| collapseText  | string  | `Collapse`  | The text shown in collapsed state.  |
| collapse  | bool  | `true`  | If `true`, the component can be collapsed. If `false`, once it is expanded, it cannot be collapsed. |
| ellipsis  | bool  | `true`  | If `true`, the `expandText` will have a prefix of `ellipsisText` prop. If `false`, no prefix will appear.  |
| ellipsisText  | string  | `'...'`  | The text to show before `expandText` text.  |
| onExpandClick  | func  | `null`  | Invoked when the user clicks on expand button  |
| onCollapseClick  | func  | `null`  | Invoked when the user clicks on collapse button  |
| onClick  | func  | `null`  | Invoked when the user clicks on button  |

## License

MIT
