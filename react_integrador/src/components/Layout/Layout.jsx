import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LayoutWrapperS } from './LayoutStyles';



const Layout = ({ children }) => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname ]);

  return <LayoutWrapperS>{children}</LayoutWrapperS>;
};
  
export default Layout;