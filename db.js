const { faker } = require("@faker-js/faker");

const getNews = (amount) =>
  Array(amount)
    .fill()
    .map(() => ({
      id: faker.datatype.number().toString(),
      title: faker.lorem.words(4),
      description: faker.lorem.words(8),
      content: Array(3)
        .fill()
        .map(() => faker.lorem.paragraphs(3)),
      cover: faker.image.nature(1024, 300, true),
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

module.exports = () => ({
  global: getGlobalConfig(),
  news: getNews(18),
});
