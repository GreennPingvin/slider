function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
  const tabsParent = document.querySelector(tabsParentSelector),
    tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector);

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  tabsParent.onclick = evt => {
    const target = evt.target;
    if (target && target.classList.contains(tabsSelector.substring(1))) {
      tabs.forEach((tab, i) => {
        if (tab === target) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  };
}

export default tabs;
