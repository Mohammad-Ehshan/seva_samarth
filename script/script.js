  //   const carouselSlide = document.querySelector('.carousel-slide');
  //   const carouselItems = document.querySelectorAll('.carousel-item');
  //   const prevBtn = document.querySelector('.carousel-prev');
  //   const nextBtn = document.querySelector('.carousel-next');
  //   let currentIndex = 0;
  //   const slideWidth = carouselItems[0].clientWidth;

  //   // function slideTo(index) {
  //   //     carouselSlide.style.transform = `translateX(-${slideWidth * index}px)`;
  //   //     currentIndex = index;
  //   // }

  //   function slideTo(index) {
  //     const newPosition = -slideWidth * index;
  //     carouselSlide.style.transform = `translateX(${newPosition}px)`;
  //     currentIndex = index;
  // }
  

  //   function prevSlide() {
  //       if (currentIndex > 0) {
  //           slideTo(currentIndex - 1);
  //       }
  //   }

  //   function nextSlide() {
  //       if (currentIndex < carouselItems.length - 1) {
  //           slideTo(currentIndex + 1);
  //       }
  //   }

  //   prevBtn.addEventListener('click', prevSlide);
  //   nextBtn.addEventListener('click', nextSlide);




  const carouselSlide = document.querySelector('.carousel-slide');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const carouselIndicators = document.querySelectorAll('.carousel-indicator');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  let currentIndex = 0;
  const slideWidth = carouselItems[0].clientWidth;

  // function slideTo(index) {
    //     carouselSlide.style.transform = `translateX(-${slideWidth * index}px)`;
    //     currentIndex = index;
    // }

  function slideTo(index) {
        const newPosition = -slideWidth * index;
        carouselSlide.style.transform = `translateX(${newPosition}px)`;
        currentIndex = index;
        updateIndicators();
    }
  function prevSlide() {
      if (currentIndex > 0) {
          slideTo(currentIndex - 1);
      }
  }

  function nextSlide() {
      if (currentIndex < carouselItems.length - 1) {
          slideTo(currentIndex + 1);
      }
  }

  function updateIndicators() {
      carouselIndicators.forEach((indicator, index) => {
          if (index === currentIndex) {
              indicator.classList.add('active');
          } else {
              indicator.classList.remove('active');
          }
      });
  }

  carouselIndicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
          slideTo(index);
      });
  });

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  updateIndicators();