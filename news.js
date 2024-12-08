const data = [
    {
      title: 'Workintech Technology trains young people who will produce',
      date: '11 November 2022',
      firstParagraph: `Workintech, which trains university students who have no prior software knowledge to enter the world's best companies in 6 months, will bring 5 thousand software developers to the sector in 3 years. Students will pay the course fee upon placement.`,
  
      secondParagraph: `Workintech, which provides training to young people between 9 a.m. and 6 p.m. for 6 months, brings young people to the level of employment with this program. University students do not pay tuition fees during their education, but they start paying once they get a job. If the child cannot find a job within 12 months, the course fee is not charged. Software developers, who can work from anywhere via a computer and the internet, can live in the country and do business abroad with foreign currency.`,
  
      thirdParagraph: `A newly graduated software developer in Turkey receives a salary between 15 thousand and 30 thousand TL. Salaries increase as you gain experience in this line of work. According to the information given by Tuğrul Türkkan, the sector that currently needs the most software developers is banking. The finance sector hires software developers for an average salary of 22 to 25 thousand TL. Then comes the telecom, e-commerce and gaming industry. Stating that they also help young people who complete the course find jobs, Tuğrul Türkkan said: "We recommend these children to our business partners as soon as they finish the course. We provide training to young people on everything from how to enter interviews, how to look for a job and even how to negotiate salaries."`,
    },
    {
      title: 'Bosch started production of much more efficient 800V motors!',
      date: '10 October 2023',
      firstParagraph: `German technology giant Bosch announced that it has started production of new generation electric motors and inverters. The company, which has significantly increased efficiency compared to the old generation 400V solutions thanks to the use of silicon carbide chips, will perhaps supply this engine to the next generation Toggs.`,
  
      secondParagraph: `Bosch said that it used a new copper winding design inside the motor, thus increasing the power density by 35% and reaching the same horsepower and torque with a lighter motor. On the inverter side, it reduced heating-related losses by 50% and increased the efficiency to almost 99%.`,
  
      thirdParagraph: `It is obvious that the transition to 800V architecture in electric vehicles is inevitable. The 800V architecture, which reduces vehicle weight with a lighter engine, inverter and high voltage cabling, contributes greatly to the range by increasing efficiency on the power electronics side. Moreover, it enables the DC charging speed to exceed 400 kW.`,
    },
    {
      title: "Apple Vision Pro will treat people's mental health",
      date: '9 November 2022',
      firstParagraph: `Apple aims to cure people's mental illnesses with its mixed reality glasses Vision Pro. It was noted that with the help of sensors and cameras, users' facial expressions, feelings and emotions can be measured and users can treat their depression and anxiety.`,
  
      secondParagraph: `The technology can reportedly also measure changes in weight, pupil dilation, and evaluate users' movements as a tool to potentially detect signs of Parkinson's disease. To treat these conditions, Vision Pro can display images and sounds on a built-in screen aimed at relieving users' stress, depression or anxiety, it said. While the headset is designed as an entertainment device, its potential use to address mental illness isn't Apple's first foray into mental health.
      The tech giant introduced mental health features in its Health app in June, allowing iPhone, iPad and Apple Watch users to track their mood and monitor their mental health, as well as their physical activity.`,
  
      thirdParagraph: `According to the Centers for Disease Control and Prevention, one in five people in the United States struggles with mental illness. Approximately one in 25 U.S. adults struggles with serious mental illness such as bipolar disorder, major depression or schizophrenia.`,
    },
    {
      title: 'Adobe abandons $20 billion Figma acquisition',
      date: '18 November 2023',
      firstParagraph: `Adobe announced it had abandoned its plan to acquire Figma for $20 billion after the companies found there was no clear path to gaining approval from UK and European Union regulators. Adobe will pay the previously agreed upon $1 billion termination fee to collaborative design platform Figma.`,
  
      secondParagraph: `In November, the UK Competition and Markets Authority (CMA) and the European Commission expressed concerns about the impact of the proposed acquisition on competition. In its provisional findings, the CMA said the merger would “eliminate competition” between the two main rivals. The Commission said it was considering blocking the deal or requiring Adobe to sell Figma's core product, Figma Design, together with Adobe XD.`,
  
      thirdParagraph: `Today, Adobe declared that it could not offer any potential remedy to the CMA. "It is clear that no realistic solution will meet the CMA's ongoing concerns," an Adobe spokesperson told Bloomberg. The European Commission also said that this merger could reduce competition and announced that it would make its final decision on the merger by February 5. Adobe had stated that it was willing to offer possible solutions to appease European regulators, but it appears that is no longer the case. “Adobe and Figma strongly disagree with the regulatory findings, but we believe it is in our best interests to proceed independently,” Adobe Chairman and CEO Shantanu Narayen said in a statement.`,
    },
  ];
  
 
  function NewsMaker(news) {
    const div = document.createElement('div');
    div.className = 'article';
  
    const h2 = document.createElement('h2');
    h2.textContent = news.title;
  
    const p = document.createElement('p');
    p.className = 'date';
    p.textContent = news.date;
  
    const p2 = document.createElement('p');
    p2.textContent = news.firstParagraph;
  
    const p3 = document.createElement('p');
    p3.textContent = news.secondParagraph;
  
    const p4 = document.createElement('p');
    p4.textContent = news.thirdParagraph;
  
    const button = document.createElement('button');
    button.className = 'expandButton';
    button.textContent = '+';
  
    button.addEventListener('click', toggleFunction);
    function toggleFunction() {
      if (div.classList.contains('article-open')) {
        div.classList.remove('article-open');
      } else {
        div.classList.add('article-open');
      }
    }
  
    div.append(h2, p, p2, p3, p4, button);
    return div;
  }
  const divArticles = document.querySelector('.articles');
  data.forEach((item) => {
    const news = NewsMaker(item);
    divArticles.appendChild(news);
  });
  