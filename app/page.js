import { NewsGrid } from "../components/NewsGrid/NewsGrid";
import { getGlobalConfig, getNews } from "../utils/fakeAPI";

const metadata = {
  title: "Gorilla News | Home",
};

const HomePage = async () => {
  const news = await getNews();
  const globalConfig = await getGlobalConfig();
  const { headline } = globalConfig;

  return <NewsGrid headline={headline} news={news} />;
};

export { metadata };
export default HomePage;
