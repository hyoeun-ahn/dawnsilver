  document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const darkSection = document.querySelector(".dark-section");

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            header.classList.add("white-text");
          } else {
            header.classList.remove("white-text");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (darkSection) observer.observe(darkSection);
  });

// class="dark-section" 붙일 시 헤더글자 흰색