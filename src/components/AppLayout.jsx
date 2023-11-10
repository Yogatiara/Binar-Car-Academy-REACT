import PropTypes from "prop-types";

import NavigationBar from "./NavigationBar";
import Footer from "./footer/Footer";

const AppLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.array,
};

export default AppLayout;
