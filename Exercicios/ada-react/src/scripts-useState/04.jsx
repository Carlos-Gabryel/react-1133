import React, { useState } from "react";

export const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <ul>
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => handleTabClick(index)}
            style={{
              cursor: "pointer",
              fontWeight: index === activeTab ? "bold" : "normal",
            }}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};
