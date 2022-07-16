window.addEventListener("load", function (e) {
  const menuItems = document.querySelectorAll(".menu-item button");
  const dropdowns = document.querySelectorAll(".dropdown");
  menuItems.forEach((item) =>
    item.addEventListener("click", (e) => {
      item.nextElementSibling.classList.toggle("show");
      item.classList.toggle("active");
    })
  );
  const menu = document.querySelector(".menu");
  const { left } = menu.getBoundingClientRect();
  const dropdownList = document.querySelector(".dropdown-list");
  dropdownList.style = `padding-left: ${left} !important`;
});
