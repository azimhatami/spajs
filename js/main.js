import { Dashboard } from "./pages/Dashboard.js";
import Products from "./pages/Products.js";
import Posts from "./pages/Posts.js";
import NotFound from "./pages/NotFound.js";


const sidebar = document.getElementById("sidebar");
const showBtn = document.querySelector('#btn')

function router(params) {
  const routes = [
    {
      path: '/',
      view: Dashboard
    },
    {
      path: '/products',
      view: Products
    },
    {
      path: '/posts',
      view: Posts
    },
  ];
  
  const potentialRoutes = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialRoutes.find((route) => route.isMatch);

  if (!match) {
    match = {
      route : { 
        path: '/not-found', 
        view: NotFound
      },
      isMatch: true
    };
  }
  document.querySelector('#app').innerHTML = match.route.view();

}

// push user to new url
function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

window.addEventListener('popstate', router)

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (event) => {
    if (event.target.hasAttribute('data-link')) {
      event.preventDefault();
      navigateTo(event.target.href);
    }
  });
  router();
})





showBtn.addEventListener('click', toggleSidebar);

function toggleSidebar() {
  sidebar.classList.toggle('show');
}
