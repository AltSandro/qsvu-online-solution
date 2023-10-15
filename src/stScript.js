(() => {
  if (window.location.href.startsWith('file://')) {
    window.location.href = 'empty.html';
  }
})();