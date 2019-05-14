import App from '../screens/App'
import About from '../screens/App/screens/About'
import Blog from '../screens/App/screens/Blog'
import BlogPost from '../screens/App/screens/Blog/screens/BlogPost'

export default {
  path: '/',
  component: App,
  name: 'Home',
  screens: ['About', 'Blog'],
  About: {
    path: '/about',
    component: About,
    screens: [],
  },
  Blog: {
    path: '/blog',
    component: Blog,
    screens: ['BlogPost'],
    BlogPost: {
      path: '/blog/:id',
      component: BlogPost,
      screens: [],
    },
  },
}
