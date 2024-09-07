const sidebar = document.getElementById("sidebar");
const showBtn = document.querySelector('#btn')

showBtn.addEventListener('click', toggleSidebar);

function toggleSidebar() {
  sidebar.classList.toggle('show');
}
