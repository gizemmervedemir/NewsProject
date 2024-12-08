let menuElements = [
    'Agenda',
    'World',
    'Economy',
    'Authors',
    'Horoscope Comments',
    'Others',
  ];
  
  function MenuMaker() {
    const div = document.createElement('div');
    div.className = 'menu';
    const ul = document.createElement('ul');
    div.appendChild(ul);
  
    menuElements.forEach((title) => {
      const li = document.createElement('li');
      li.textContent = title;
      ul.appendChild(li);
    });
  
    document
      .querySelector('.menu-button')
      .addEventListener('click', menuFunction);
    function menuFunction() {
      div.classList.toggle('menu--open');
    }
    return div;
  }
  const container = document.querySelector('.header');
  const menuComponent = MenuMaker(menuElements);
  container.appendChild(menuComponent);
  