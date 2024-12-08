
const cardDataList = [
    {
      imgURL: 'https://i.ibb.co/W3hCdQt/js.png',
      header: '1. Introduction: Dynamic Content and JavaScript',
      paragraph:
        'With the developments in web technologies, the use of dynamic content is becoming increasingly common to increase interaction with users and provide richer experiences. In this context, the JavaScript (JS) language stands out as a powerful tool for creating dynamic content in browser-based applications.',
      navigationURL:
        'https://appmaster.io/tr/blog/javascript-dinamik-web-icerigi',
    },
    {
      imgURL: 'https://i.ibb.co/pxym76z/dom.png',
      header: '2. Basic JavaScript Functions and DOM Manipulation',
      paragraph:
        'JavaScript provides powerful control over the Document Object Model (DOM) on the browser. Using JS, we can make changes to the HTML structure of the page and thus dynamically update the content. For example, we can create new HTML elements and add them to the page with functions such as createElement and appendChild.',
      navigationURL:
        'https://medium.com/@kahil_kubilay/doma-hakim-olma-702de9c0a0d0',
    },
    {
      imgURL: 'https://i.ibb.co/8mfvnf4/ajax.png',
      header: '3. Asynchronous Content Loading with Ajax Technology',
      paragraph:
        'JavaScript provides the opportunity to exchange data in the background without refreshing the page through Asynchronous JavaScript and XML (Ajax) technology. In this way, while users navigate through the page, new data can be retrieved in the background and the page content can be updated instantly.',
      navigationURL:
        'https://medium.com/@cagla.aslantas1/web-geli%C5%9Ftirmede-bir-devrim-ajax-ile-dinamik-i%CC%87%C3%A7erik-y%C3%BCkleme-f59b040be5f9',
    },
    {
      imgURL: 'https://i.ibb.co/6t26v2v/css.jpg',
      header: '4. Visual Content Management: CSS and Animations',
      paragraph:
        'In addition to creating dynamic content, we can also modify CSS styling properties with JavaScript. This is important to increase user interactions. For example, we can enrich the user experience by adding animations such as the background color changing when a button is clicked or an element slowly disappearing.',
      navigationURL: 'https://www.kodkampusu.com/css-animasyonlar/',
    },
    {
      imgURL: 'https://i.ibb.co/3NWj2x7/user-experience.jpg',
      header: '5. Security Tips and Conclusion: Improving User Experience',
      paragraph:
        'When creating dynamic content, it is important not to neglect security measures. By paying attention to issues such as validating user input, ensuring security, and observing browser compatibility, we can significantly improve the user experience by creating dynamic content with JavaScript. In this way, we can deliver more interactive and attractive content in modern web applications.',
      navigationURL:
        'https://www.kukumav.net/blog/web-site-kullanici-deneyimi-iyilestirme/',
    },
  ];
  
  function Card(imgURL, header, paragraph, navigationURL) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const hr = document.createElement('hr');
    const div2 = document.createElement('div');
    const p = document.createElement('p');
    const a = document.createElement('a');
  
    div.classList.add('card');
    img.src = imgURL;
    h2.textContent = header;
    div2.classList.add('card-content');
    p.textContent = paragraph;
    a.href = navigationURL;
    a.textContent = 'More...';
  
    div2.append(p, a);
    div.append(img, h2, hr, div2);
  
    return div;
  }
  
  const container = document.querySelector('.container');
  cardDataList.forEach((item) => {
    const cardData = Card(
      item.imgURL,
      item.header,
      item.paragraph,
      item.navigationURL
    );
    container.appendChild(cardData);
  });
  