import "../styles/globals.css";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";

const RootLayout = ({ children }) => {
  return (
    <html>
      <head />
      <Navigation />
      <body>{children}</body>
      <Footer />
    </html>
  );
};

export default RootLayout;
