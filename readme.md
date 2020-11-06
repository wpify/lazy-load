# Lazy loading helper

**Usage:**

```js
import lazyLoad from 'wpify-lazy-load';

lazyLoad(document.querySelector('.lazy'), (element) => {
  doSomethingWithTheElementWhenVisible(element);
});
```
