module.exports = (element, load) => {
  if (!element || !load) {
    return;
  }

  const observerCallback = (entries, observer) => {
    entries.forEach((element) => {
      if (element.isIntersecting) {
        load(element.target);
        observer.unobserve(element.target);
      }
    });
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(observerCallback);
    observer.observe(element);
  } else {
    load(element);
  }
};
