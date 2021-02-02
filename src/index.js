module.exports = function (element, load) {
  if (!element || !load) {
    return;
  }

  function observerCallback (entries, observer) {
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];

      if (entry.isIntersecting) {
        load(entry.target);
        observer.unobserve(entry.target);
      }
    }
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(observerCallback);
    observer.observe(element);
  } else {
    load(element);
  }
};
