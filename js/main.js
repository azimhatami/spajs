const sidebar = document.getElementById("sidebar");
const showBtn = document.querySelector('#btn')

function router(params) {
  const routes = [
    {
      path: '/',
      view: () => console.log('dashboard page')
    },
    {
      path: '/products',
      view: () => console.log('products page')
    },
    {
      path: '/posts',
      view: () => console.log('posts page')
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

document.addEventListener('DOMContentLoaded', () => {
  router();
})





showBtn.addEventListener('click', toggleSidebar);

function toggleSidebar() {
  sidebar.classList.toggle('show');
}
