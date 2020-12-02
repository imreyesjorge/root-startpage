
![](assets/Header.png)

## Root is a start-page aimed to simplicity and elegance.
[Demo available here](https://imreyesjorge.github.io/root-startpage/)

# How-to use it
To use this page, you must first have installed `nodejs` and `npm` so you can build the page after customizing it.

## Needed things
1. You need to download [nodejs](https://nodejs.org/en/).
2. Then you simply install it (npm comes with nodejs).

After installing `nodejs` and `npm` you can customize the source code before building the page.

## Customizing
To change the name and the pages edit the `src/index.pug` file.

```pug
-
  const name = 'John Doe'
  const cards = [
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      link: 'https://twitter.com/'
    },
    {
      name: 'Columns',
      icon: 'fas fa-columns',
      link: 'https://columns.app/'
    },
    {
      name: 'Dribbble',
      icon: 'fab fa-dribbble',
      link: 'https://dribbble.com/'
    },
    {
      name: 'Reddit',
      icon: 'fab fa-reddit',
      link: 'https://www.reddit.com/'
    },
    {
      name: 'Github',
      icon: 'fab fa-github',
      link: 'https://github.com/'
    },
    {
      name: 'Whatsapp',
      icon: 'fab fa-whatsapp',
      link: 'https://web.whatsapp.com/'
    },
    {
      name: 'Youtube',
      icon: 'fab fa-youtube',
      link: 'https://www.youtube.com/'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      link: 'https://www.linkedin.com/'
    }
  ]
```

To place a new page, just append a new object to the array.

```js
{
    name: 'page name',
    icon: 'font awesome icon class',
    link: 'url to the page'
}
```

### Changing Colors
Changing colors is easy, just edit the file `src/styles/1-base/_variables.scss` before building.

You're gonna see something like this:

```css
$primary: #6C5DD3;
$secondary: #FC9E4F;
$white: #EFF9F0;
$background: #333138;
$background-darker: #1E1C21;
```

## Build

Once edited, open a terminal in the project directory and  run `npm run build` and the page will be stored in `docs`.