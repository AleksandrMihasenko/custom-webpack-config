function createAnalytics() {
  let count = 0;
  let isRemoved = false;
  
  function listener() {
    return count++;
  }
  
  document.addEventListener('click', listener);
  
  return {
    destroy() {
      document.removeEventListener('click', listener);
      isRemoved = true;
    },
    getClicks() {
      if (isRemoved) {
        return 'Analytics was removed';
      }
      return count;
    }
  }
}

window.analytics = createAnalytics();
