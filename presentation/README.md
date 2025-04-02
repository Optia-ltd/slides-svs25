# Presentation sources

- `index.html`: Entrypoint. This is where you include all of your slides.
- `contents`: You can author the contents of your slides here. To include a file, say `contents/myslide.html`, add the following line to `index.html`:
```html
<section data-external="contents/myslide.html" data-auto-animate></section>
```
- `metadata.json`: Add some data about the presentation. We have some [predefined fields](#metadata), but you can also define your own replacements.
- `js`: Some scripts that are automatically loaded. Any `.js` file that you add in `js/custom_addons` gets loaded automatically.


## Metadata 

You can define some predefined fields in `metadata.json`, which are already used 
throughout the slides:

| Field name | usage                                             | default value |               
| ---------- | ------------------------------------------------- | --------------| 
| `title`    | Throughout the slides (title slide, footer , ...) | `""`          |  
| `subtitle` | See `title`                                       | `""`          |
| `event`    | Title slide; the event at which the talk is given. | ""| 
| `location` | Title slide; the location at which the talk is given | "" |
| `date`     | Title slide, footer                               | today's date  |


Additionally, you can define custom replacements. For example,
After adding the line `"foo": "bar"` to `metadata.json`, the `innerHTML`
of all elements with `id=foo` get replaced with `bar`. That is, 
if you defined a placeholder `<span id="foo"></span>` somewhere in your slide,
it would get rendered as `<span id="foo">bar</span>`.


