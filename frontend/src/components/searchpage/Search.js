import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Smessages from "../searchpage/Smessages";
import Shome from "../searchpage/Shome";
import Slogin from "../searchpage/Slogin";
import Ssignup from "../searchpage/Ssignup";
import Slogout from "../searchpage/Slogout";
import { ThemeProvider } from "styled-components";
import SHomepage from "../postpage/Pages/SHomePage";
import JobDetails from "../searchpage/JobDetails";
// import "../../App.css";

const Search = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/search" element={<Shome />} />
          <Route path="/slogin" element={<Slogin />} />
          <Route path="/smessages" element={<Smessages />} />
          <Route path="/messaa" element={<SHomepage />} />
          {/* <Route path="/ssignup" element={<Ssignup />} /> */}
          <Route path="/sapply" element={<Slogout />} />
          {/* <Route path="/jobs/:id" element={<JobDetails />} /> */}
          <Route path="/job/:id" element={<Ssignup />} />
          {/* <Route path="/jobs/detailsfor" element={<Ssignup />} /> */}
          
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default Search;
