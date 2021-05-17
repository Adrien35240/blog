import React, { useEffect, useState } from "react";
import "./toggle-dark-mode.css";
function ToggleDarkMode() {
  const [toggleSwitch, setToggleSwitch] = useState("");
  useEffect(() => {
    const toggleBox = document.querySelector(
      '.theme-switch input[type="checkbox"]'
    );
    setToggleSwitch(toggleBox);
  }, []);

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }

  //    toggleSwitch.addEventListener("change", switchTheme, false);

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
