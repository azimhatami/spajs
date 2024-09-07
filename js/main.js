const sidebar = document.getElementById("sidebar");
const showBtn = document.querySelector('#btn')

function router(params) {
  const routes = [
    {
      path: '/',
      view: () => 'dashboard page'
    },
    {
      path: '/products',
      view: () => 'products page'
    },
    {
      path: '/posts',
      view: () => 'posts page'
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
        view: () => console.log('not-found page')
      },
      isMatch: true
    };
  }
  console.log(match.route.view());

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
