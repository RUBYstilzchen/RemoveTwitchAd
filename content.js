const observer = new MutationObserver(function(mutationsList, observer) {
    const adElement = document.querySelector('.Layout-sc-1xcs6mc-0.dZwwnJ.player-overlay-background.player-overlay-background--darkness-3');
    
    if (adElement) {
      adElement.remove();
      observer.disconnect();
    }
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  