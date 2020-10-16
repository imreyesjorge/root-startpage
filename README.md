
![](assets/image.png)

## Root is a start-page aimed to simplicity and elegance.

### Customizing
To change the name and the pages edit the **index.pug**

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

## Build

Once edited, run `npm run build` and the page will be stored in `docs`.