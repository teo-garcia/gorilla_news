const { faker } = require("@faker-js/faker");

const getNews = (amount) =>
  Array(amount)
    .fill()
    .map((_, index) => ({
      id: (++index).toString(),
      title: faker.lorem.words(4),
      description: faker.lorem.words(6),
      content: Array(3)
        .fill()
        .map(() => faker.lorem.paragraphs(4)),
      cover: "https://picsum.photos/2048/300",
      likes: 0,
    }));

const getGlobalConfig = () => ({
  navigation: {
    title: "Gorilla News",
  },
  footer: {
    description: `Gorilla News - ${new Date().getUTCFullYear()} © - All rights reserved.`,
  },
  headline: {
    title: "Latest News:",
    description: faker.lorem.words(40),
  },
});

const getHealthCheck = () => ({
  website: {
    status: 200,
    message: "The website is operating normally.",
  },
  // website: {
  //   status: 500,
  //   message: "The website has issues.",
  // },
});

module.exports = () => ({
  global: getGlobalConfig(),
  news: getNews(8),
  healthcheck: getHealthCheck(),
});
