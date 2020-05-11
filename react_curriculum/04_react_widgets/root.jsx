import React from "react";
import Clock from "./frontend/clock";
import Tabs from "./frontend/tabs";
import Weather from "./frontend/weather";
import Autocomplete from "./frontend/autocomplete";

function Root(props) {
  const tabData = [
    {
      title: "Tab one",
      content: "I am one",
    },
    {
      title: "Tab two",
      content: "I am two",
    },
    {
      title: "Tab three",
      content: "I am three",
    },
  ];

  const names = [
    "Fares",
    "Andrew",
    "Vanessa",
    "Steve",
    "Sophie",
    "Kevin",
    "Victoria",
  ];
  return (
    <div>
      <Clock />
      <Weather />
      <Autocomplete names={names}/>
      <Tabs tabSections={tabData} />
    </div>
  );
}

export default Root;
