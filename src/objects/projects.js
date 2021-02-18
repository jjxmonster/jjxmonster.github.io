import weatherApp from '../styles/images/weatherapp.jpg';
import weatherApp2 from '../styles/images/weatherapp2.jpg';
import weatherApp3 from '../styles/images/weatherapp3.jpg';
import weatherApp4 from '../styles/images/weatherapp4.jpg';
import budget1 from '../styles/images/budget1.jpg';
import budget2 from '../styles/images/budget2.jpg';
import budget3 from '../styles/images/budget3.jpg';
import budget4 from '../styles/images/budget4.jpg';
import tissot1 from '../styles/images/tissot.png';
import tissot2 from '../styles/images/tissot2.png';
import tissot3 from '../styles/images/tissot3.png';
import tissot4 from '../styles/images/tissot4.png';
import note1 from '../styles/images/note1.jpg';
import note2 from '../styles/images/note2.jpg';
import note3 from '../styles/images/note3.jpg';

export const projects = [
   {
      id: 1,
      name: 'Weather App',
      linkName: 'weatherapp',
      images: [weatherApp, weatherApp2, weatherApp3, weatherApp4],
      description:
         'React application using free weather API, gets with fetch(). With smooth animations using GSAP. User is able to know the current temperature, humadity, pressure and wind speed.',
      technology: 'React, React Hooks, GSAP, CSS, API',
      github: 'https://github.com/jjxmonster/React-Weather-App',
   },
   {
      id: 2,
      name: 'Tissot Store',
      linkName: 'tissot-store',
      images: [tissot1, tissot2, tissot3, tissot4],
      description:
         "React shopping cart with Tissot watches, user can browse the store's offer, add product to cart (if he wants, he can remove it). After entering the data in the form, order will be saved in json file",
      technology:
         'React, Redux, Styled Components, React Final Form, React-Query, JSON Server',
      github: '',
   },
   {
      id: 3,
      name: 'Note',
      linkName: 'note',
      images: [note1, note2, note3],
      description:
         'React application using Redux when user can add notes, check them out and edit. Project is Single Page Application.',
      technology: 'React, Redux, Styled Components',
      github: '',
   },
   {
      id: 4,
      name: 'Budget App',
      linkName: 'budget',
      images: [budget1, budget2, budget3, budget4],
      description:
         'React application about budget, user can add his budget and categories, add to them transactions. User is able to know how much money he allocated in the month concerned, how much he spent in different categories, and how much money is left.',
      technology:
         'React, Redux, Styled Components, React Final Form, i18next, JSON Server',
      github: '',
   },
];
