
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

  $(document).ready(function() {
  $(".treatment-carousel").slick({
    centerMode : true,
    slidesToShow : 1,
    slidesToScroll: 1, 
    dots : true,
    // autoplay : true,
    autoplaySpeed : 2000,
    centerPadding :"220px",
    arrows: false,
    infinite: true,
     responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "180px"
        }
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: "120px"
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "20px"
        }
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: "0px"
        }
      },
      {
        breakpoint: 420,
        settings: {
          centerPadding: "0px"
        }
      }
    ]
  });
});