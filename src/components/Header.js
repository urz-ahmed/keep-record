import React from "react";
const Header = () => {
  return (
    <>
        <nav>
        <div className="logo-content">
        <img
          className="logo-img" src="https://banner2.cleanpng.com/20180620/vx/kisspng-records-management-business-irs-e-file-clip-art-5b2ad77f7173c1.6316829115295343354647.jpg" alt="iprofile"/>
        <span><h1>Record Keeping</h1></span>
        </div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </nav>
    </>
  );
};

export default Header;
