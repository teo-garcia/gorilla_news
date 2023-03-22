import "../styles/globals.css";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";
import { getGlobalConfig } from "../utils/fakeAPI";

const RootLayout = async ({ children }) => {
  const pageData = await getGlobalConfig();
  const { navigation, footer } = pageData;
  return (
    <html>
      <head />
      <body>
        <Navigation {...navigation} />
        <main>{children}</main>
        <Footer {...footer} />
      </body>
    </html>
  );
};

export default RootLayout;
