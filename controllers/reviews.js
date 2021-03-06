const REVIEWS = [
  {
    id: 1,
    photo: "/img/reviewers/reviewer-1-desktop@1x.jpg",
    author: "Сережа Попов",
    text: "Я выражаю огромную благодарность вашему питомнику. Мой Феликс невероятно умен и воспитан. Огромным плюсом питомника является возможность консультироваться в любое время",
    date: "2018-05-24",
    socialLinks: ["https://twitter.com/", "https://vk.com/id29781961"],
  },

  {
    id: 2,
    photo: "/img/reviewers/reviewer-2-desktop@1x.png",
    author: "Василиса Лазарева",
    text: "Год назад приобрела котенка. Было очень много вопросов, сомнений. Спасибо огромное Вашей команде, что развеяли все мои страхи! Даже не ожидала, что за год котенок так вырастет! Теперь подумываем завести кошечку. И, конечно, обращаться будем только к вам!",
    date: "2018-09-17",
    socialLinks: ["https://twitter.com/", "https://vk.com/id29781961"],
  },

  {
    id: 3,
    photo: "",
    author: "Кирилл Егоров",
    text: "Однозначно лучший питомник области! Все коты с прививками и необходимыми документами. Когда мы забирали кота, нам дали много памяток по уходу и пачку корма в подарок.",
    date: "2019-10-05",
    socialLinks: ["https://twitter.com/", "https://vk.com/id29781961"],
  },
];

export const getReviews = (req, res) => {
  res.status("200").json(REVIEWS);
};
