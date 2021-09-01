import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import restoreProductFilters from "../../../utils/restoreProductFilters";

const PageLoadEffects = ({ children , location: { pathname }}) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });

    // Reset the filter for products, every time on user leave pa pages for products.
    if(!pathname.includes('/products'))
    {
        restoreProductFilters();
    }

  }, [pathname]);

  return children || null;
};

export default withRouter(PageLoadEffects);