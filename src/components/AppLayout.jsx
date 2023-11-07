import PropTypes from 'prop-types';

import NavigationBar from './NavigationBar';
import Footer from './Footer';

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
  children: PropTypes.element,
};

export default AppLayout;
