import { NewsDetail } from "../../../components/NewsDetail/NewsDetail";
import { getNew, getNews } from "../../../utils/fakeAPI";

const generateStaticParams = async () => {
  const news = await getNews();
  const paths = news.map((newItem) => ({ id: newItem.id }));
  return paths;
};

const metadata = {
  title: "Gorilla News | Detail",
};

const NewsDetailPage = async (props) => {
  const { id } = props.params;
  const newItem = await getNew(id);
  return <NewsDetail {...newItem} />;
};

export { metadata, generateStaticParams };
export default NewsDetailPage;
