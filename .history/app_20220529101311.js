window.addEventListener("load", function (e) {
  const menuItems = document.querySelectorAll(".menu-item");
  const dropdowns = document.querySelectorAll(".dropdown");
  menuItems.forEach((item) =>
    item.addEventListener("click", (e) => {
      dropdowns.forEach((item) => item.classList.remove("show"));
    })
    item.nextElementSibling.classList.add("show");
  );
});
