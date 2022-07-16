window.addEventListener("load", function (e) {
  const menuItems = document.querySelectorAll(".menu-item button");
  const dropdowns = document.querySelectorAll(".dropdown");
  menuItems.forEach((item) =>
    item.addEventListener("click", (e) => {
      item.nextElementSibling.classList.toggle("show");
      item.classList.toggle("active");
    })
  );
});
