const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  const hideContent = () => {
    content.forEach(item => {
      item.style.display = 'none';
    });
    tab.forEach(item => {
      item.classList.remove(activeClass);
    });
  };

  const showContent = (i = 0) => {
    content[i].style.display = 'block';
    tab[i].classList.add(activeClass);
  };


  hideContent();
  showContent();

  header.addEventListener('click', function (e) {
    e.preventDefault();
    const target = e.target;
    if (target && 
      (target.classList.contains(tabSelector.slice(1)) ||
       target.parentNode.classList.contains(tabSelector.slice(1)))) {
     
        tab.forEach((item, i) => {
        if (target === item || target.parentNode === item) {
          hideContent();
          showContent(i);
        }
      });
    }
  });

};

export default tabs;