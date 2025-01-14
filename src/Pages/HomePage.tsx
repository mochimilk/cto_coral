import React, { useState } from "react";

import { Title3, Body1, Body1Strong } from "@fluentui/react-components";

import { useNavigate } from "react-router-dom";



function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${year}`;
}

const RightPanelLayout: React.FC = () => {
  const navigate = useNavigate();

const handleClick = () => {
  // Perform some action
  navigate('/developers/installation');
};
  const [currentDate, setCurrentDate] = useState(getDate());
  return (
    <div className="layout" style={{ display: "flex" }}>
      {/*📌 Below is the setup for Content.
       ***To populate its contents, go to ./src/Modules/Content.tsx */}

      <div className="homeLayout">
        <div className="homeContainer">
          <Title3>What's your role?</Title3>
          <div className="promptButtonContainer">
  
            <div className="promptButton" onClick={handleClick}>
              {/* <Code /> */}
              <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Woman%20Technologist%20Medium-Dark%20Skin%20Tone.png"
                alt="Woman Technologist Medium-Dark Skin Tone"
                width="32"
                height="32"
              />
              <Body1Strong>Developer</Body1Strong>
              <Body1 style={{ color: "var(--colorNeutralForeground4" }}>
            
                Quick install, documentation, and guides
              </Body1>
            </div>

            <div className="promptButton">
              {/* <DesignIdeas /> */}
              <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Artist%20Medium-Light%20Skin%20Tone.png"
                alt="Artist Medium-Light Skin Tone"
                width="32"
                height="32"
              />
              <Body1Strong>Designer</Body1Strong>
              <Body1 style={{ color: "var(--colorNeutralForeground4" }}>
                {" "}
                Figma libraries, using Coral, <br/>and Fluent integration
              </Body1>
            </div>

            <div className="promptButton">
              {/* <Flow /> */}
              <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Office%20Worker%20Medium%20Skin%20Tone.png"
                alt="Man Office Worker Medium Skin Tone"
                width="32"
                height="32"
              />
              <Body1Strong>Product Manager</Body1Strong>
              <Body1 style={{ color: "var(--colorNeutralForeground4" }}>
                {" "}
                Understanding Coral as a product
              </Body1>
            </div>
          </div>
          <Body1 style={{ color: "var(--colorNeutralForeground4)" }}>
            With love, from Seattle © Microsoft {currentDate}
          </Body1>
        </div>
      </div>
    </div>
  );
};

export default RightPanelLayout;
