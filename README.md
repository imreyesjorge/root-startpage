![](./assets/header.png)

### Root is a start-page aimed to simplicity and elegance

This project is blazing fast :zap:, it only contains an html, css and javascript files.

## Customizing

Root was created to be lightweight, fast and easy to customize.

### Changin Colors

To change the colors used in the startpage edit `styles.css`.

```css
:root {
  --primary: #dd2e44;
  --text-light: #eeeeee;
  --background: #1e1c21;
  --background-light: #333138;
}
```

### Changin Name and Adding Custom Cards

To change the default name and edit the cards, edit `app.js`. It should look something like this:

```js
const NAME = "John Doe";

const CARDS = [
  {
    name: "Twitter",
    link: "https://twitter.com",
  },
  {
    name: "Hashnode",
    link: "https://hashnode.com/",
  },
];
```
