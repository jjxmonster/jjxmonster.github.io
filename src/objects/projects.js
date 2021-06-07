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
import movie1 from '../styles/images/movie1.png';
import movie2 from '../styles/images/movie2.png';
import movie3 from '../styles/images/movie3.png';
import movie4 from '../styles/images/movie4.png';

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
      description: `React shopping cart with Tissot watches, user can browse the store's offer, add product to cart (if he wants, he can remove it). After entering the data in the form, order will be saved in json file  due to custom backend with express.js. User can also check all
         orders`,
      technology:
         'React, Redux, Styled Components, React Final Form, React-Query, Node.js, Express.js',
      github: '',
   },
   {
      id: 3,
      name: 'Movie Library',
      linkName: 'movie-library',
      images: [movie1, movie2, movie3, movie4],
      description:
         'User can choose his favourite movie genre and see movies matching to that. After click to some movie, user will able to see more information about it, like description, duration and links to movie website and watch trailer.         ',
      technology: 'React, Redux, Styled Components, React-Query',
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
