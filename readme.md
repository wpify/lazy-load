# Lazy loading helper

Usage:

```
import lazyLoad from 'wpify-lazy-load';
lazyLoad(document.querySelector('.lazy'), (element) => {
  doSomethingWithTheElementWhenVisible(element);
});
```
