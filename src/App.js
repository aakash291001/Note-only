import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setalert] = useState({
    message: "Light mode enabled",
    type: "success",
  });
  const showAlert = (msg, typ) => {
    setalert({
      message: msg,
      type: typ,
    });
  };
  const toggleMode = (event) => {
    if (Mode === "light") {
      setMode("dark");
      showAlert("Dark mode enabled", "success");
      document.body.style.backgroundColor = "#102234";
      document.body.style.color = "white";
      document.title = "Notes Only - dark mode";
    } else if (Mode === "dark") {
      setMode("light");
      showAlert("Light mode enabled", "success");
      document.body.style.backgroundColor = "#79bcfd";
      document.body.style.color = "#292b2c";
      document.title = "Notes Only - light mode";
    }
  };
  return (
    <>
        <Navbar
          title="NotesOnly"
          more="See More"
          location="Delhi"
          contact="9868108485"
          about="What"
          mode={Mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
            <TextForm
                title="Enter your data here"
                mode={Mode}
                showAlert={showAlert}
              />
        </div>
    </>
  );
}

export default App;
