/* eslint-disable import/no-anonymous-default-export */
import Carousel from "../Carousel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

import "./FilterSection.css";
//import { useState } from "react";

export default ({ tittle, data, filters, executeFilter }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="section">
      <div>
        <h1 className="tittle">{tittle}</h1>
      </div>
      <Tabs
        value={selectedTab}
        onChange={(e, value) => {
          executeFilter(filters[value].key);
          setSelectedTab(value);
        }}
        TabIndicatorProps={{
          style: {
            backgroundColor: "green",
          },
        }}
      >
        {filters.map((f) => (
          <Tab className="tab" key={f.key} label={f.label} />
        ))}
      </Tabs>
      <Carousel data={data} />
    </div>
  );
};
