import React, { useEffect } from "react";
import "./toggle-dark-mode.css";
function ToggleDarkMode() {
  useEffect(() => {
   document.querySelector(
      '.theme-switch input[type="checkbox"]'
    );
  }, []);

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }


  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onChange={switchTheme} />
        <div className="slider round"></div>
      </label>
    </div>
  );
}

export default ToggleDarkMode;
