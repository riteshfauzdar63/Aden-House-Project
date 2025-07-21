
  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("treatments-toggle");
    const dropdown = document.getElementById("treatments-dropdown");

    toggleBtn.addEventListener("click", function (e) {
      e.preventDefault();
      dropdown.classList.toggle("d-none");
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest('.custom-dropdown')) {
        dropdown.classList.add("d-none");
      }
    });
  });

