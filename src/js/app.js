// Fetch data from api

getReviews();

async function getReviews() {
  const responce = await fetch("/api/reviews");
  const reviews = await responce.json();
  renderReviews(reviews);
}

function renderReviews(reviews) {
  reviewsSlider.textContent = "";
  reviews.forEach((item) => {
    const reviewHTML = ` 
      <li class="reviews__item">
        <img src=${
          item.photo ? item.photo : "/img/reviewers/reviewer-unname-2.jpg"
        } alt="фото автора">
        <div class="review__content">
          <h3>${item.author}</h3>
          <p>${item.text}</p>
          <div class="review-footer">
            <time datetime="${item.date}">${formatDate(item.date)}</time>
            <div class="review__social-links">
              <svg class="social__icon reviews__icon reviews__icon--tw" width="17" height="12">
                <use xlink:href="#icon-tw" x="0" y="0"></use>
              </svg>
              <svg class="social__icon reviews__icon reviews__icon--vk" width="13" height="8">
                <use xlink:href="#icon-vk" x="0" y="0"></use>
              </svg>
            </div>
          </div>
        </div>
      </li>
    `;

    reviewsSlider.insertAdjacentHTML("beforeend", reviewHTML);
  });

  reviewsSlidesCount = document.querySelectorAll(".reviews__item").length - 1;
}

// Slider

const reviewsSlider = document.querySelector(".reviews__main-slider");
const reviewsSliderPrevButton = document.querySelector(
  ".reviews-controls-prev"
);
const reviewsSliderNextButton = document.querySelector(
  ".reviews-controls-next"
);

let reviewsSlidesCount;
let activeSlideIndex = 0;

reviewsSliderPrevButton.addEventListener("click", () =>
  changeReviewsSlides("prev")
);
reviewsSliderNextButton.addEventListener("click", () =>
  changeReviewsSlides("next")
);

function changeReviewsSlides(direction) {
  switch (direction) {
    case "prev":
      activeSlideIndex--;
      if (activeSlideIndex < 0) {
        activeSlideIndex = reviewsSlidesCount;
      }
      break;
    case "next":
      activeSlideIndex++;
      if (activeSlideIndex > reviewsSlidesCount) {
        activeSlideIndex = 0;
      }
      break;
  }

  const width = reviewsSlider.offsetWidth;
  reviewsSlider.style.transform = `translateX(-${width * activeSlideIndex}px)`;
}

// Utils

function formatDate(date) {
  const months = {
    1: "января",
    2: "февраля",
    3: "марта",
    4: "апреля",
    5: "мая",
    6: "июня",
    7: "июля",
    8: "августа",
    9: "сентября",
    10: "октября",
    11: "ноября",
    12: "декабря",
  };
  const dateArr = date.split("-").reverse();
  const formatMonth = () => {
    if (dateArr[1].length === 2 && dateArr[1] < 10) {
      return dateArr[1].substr(1);
    } else {
      return dateArr[1];
    }
  };
  const month = months[formatMonth()];
  const dateStr = `${dateArr[0]} ${month} ${dateArr[2]}`;

  return dateStr;
}
