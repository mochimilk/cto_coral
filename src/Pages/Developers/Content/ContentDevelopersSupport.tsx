import React from "react";
import "../../../Styles/App.css";
import {
  Body1Strong,
  Button,
  Tooltip,
  Toolbar,
  ToolbarButton,
  ToolbarDivider,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  Avatar,
  Caption1,
} from "@fluentui/react-components";
import { MoreHorizontalRegular } from "@fluentui/react-icons";
import {
  PanelLeftContract,
  PanelLeftExpand,
  PanelRightContract,
  PanelRightExpand,
  Search,
} from "../../../Imports/bundleIcons.tsx";
import { useContentHooks } from "../../../Hooks/useContentHooks.tsx";


interface ContentProps {
  isPanelOpen: boolean;
  togglePanel?: () => void; // Optional to conditionally render left toggle
  isRightPanelOpen: boolean;
  toggleRightPanel?: () => void; // Optional to conditionally render right toggle
}

const ContentDevelopers: React.FC<ContentProps> = ({
  isPanelOpen,
  togglePanel,
  isRightPanelOpen,
  toggleRightPanel,
}) => {
  const { commandKey } = useContentHooks({ togglePanel, toggleRightPanel });
  const sampleClone = `
git clone https://github.com/<your-username>/<repository-name>.git
cd <repository-name>
`;
  const sampleDependencies = `
npm install
yarn install
`;
  const sampleRun = `
npm start
yarn start
`;

  return (
    <div className="contentContainer">
      {/*📌 Below is the setup for the content toolbar.
       ***You may remove this if your app doesn't need a toolbar. */}

      <div className="panelHeader">
        <div className="headerTitleGroup">
          {togglePanel && ( // Hide left toggle if togglePanel is not provided
            <Tooltip content={`${commandKey} + ←`} relationship="label">
              <Button
                icon={isPanelOpen ? <PanelLeftContract /> : <PanelLeftExpand />}
                onClick={togglePanel}
                appearance="subtle"
              />
            </Tooltip>
          )}
          <Body1Strong style={{ color: "var(--colorNeutralForeground2)" }}>
            Support
          </Body1Strong>
        </div>

        <Toolbar>
          <ToolbarButton icon={<Search />} />
          <Menu>
            <MenuTrigger>
              <ToolbarButton
                aria-label="More"
                icon={<MoreHorizontalRegular />}
              />
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem>New </MenuItem>
                <MenuItem>New Window</MenuItem>
                <MenuItem disabled>Open File</MenuItem>
                <MenuItem>Open Folder</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
          <ToolbarDivider />
          {toggleRightPanel && ( // Hide right toggle if toggleRightPanel is not provided
            <Tooltip content={`${commandKey} + →`} relationship="label">
              <ToolbarButton
                icon={
                  isRightPanelOpen ? (
                    <PanelRightContract />
                  ) : (
                    <PanelRightExpand />
                  )
                }
                onClick={toggleRightPanel}
                appearance="subtle"
              />
            </Tooltip>
          )}
        </Toolbar>
      </div>

      {/*📌 Below is the setup for Content.
       ***You can import just about anything into className"content" and it should show up in the content panel
       ***Dependencies for .md files and react-markdown are preinstalled.
       ***Don't forget call your import above!
       ***/}

      <div className="content">
        <div style={{ width: "100%", maxWidth: "728px", margin: " 0 auto" }}>
          <h1>Support</h1>

          <p>
            We are currently in Alpha stages of our build. If you have any
            questions, please defer to the team below to get assistance.
            <br />
            <br />
            <div
              className="infoTile"
              style={{
                flexDirection: "column",
                alignItems: "baseline",
                gap: "24px",
              }}
            >
              <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Folded%20Hands.png"
                alt="Folded Hands"
                width="32"
                height="32"
              />



              <p>
                {" "}
                <h4 style={{ margin: "0 0 2px 0" }}>We're on Teams!</h4>Join our
                channel to get quick feedback and insights from community
                members.
              </p>
              <a href="" target="_blank">
                <Button>Join Channel</Button>
              </a>
            </div>
            If You want to help us build the best workflow for our team, go to
            Labs.
          </p>

          <h3>Designers</h3>

          <div className="personaField">
            <div className="personaContainer">
              <div className="personaButton">
                <Avatar color="colorful" name="Nancy Nazarian" />
                <div>
                  <Body1Strong>Nancy Nazarian</Body1Strong>
                  <br />
                  <Caption1 style={{ color: "var(--colorNeutralForeground4" }}>
                    <span style={{ textTransform: "uppercase" }}>
                      Principal Design Mgr
                    </span>{" "}
                    <br />
                    nnazarian@microsoft.com
                  </Caption1>
                </div>
              </div>

              <div className="personaButton">
                <Avatar color="colorful" name="Eunsoo Lee" />
                <div>
                  <Body1Strong>Eunsoo Lee</Body1Strong>
                  <br />
                  <Caption1 style={{ color: "var(--colorNeutralForeground4" }}>
                    <span style={{ textTransform: "uppercase" }}>
                      Designer 2
                    </span>{" "}
                    <br />
                    eunsoolee@microsoft.com
                  </Caption1>
                </div>
              </div>

              <div className="personaButton">
                <Avatar color="colorful" name="Jessie Chen" />
                <div>
                  <Body1Strong>Jessie Chen</Body1Strong>
                  <br />
                  <Caption1 style={{ color: "var(--colorNeutralForeground4" }}>
                    <span style={{ textTransform: "uppercase" }}>
                      Designer 2
                    </span>{" "}
                    <br />
                    jessiechen@microsoft.com
                  </Caption1>
                </div>
              </div>
            </div>
          </div>

          <h3>Developers</h3>

          <div className="personaField">
            <div className="personaContainer">
              <div className="personaButton">
                <Avatar color="colorful" name="Nalini Chandhi" />
                <div>
                  <Body1Strong>Nalini Chandhi</Body1Strong>
                  <br />
                  <Caption1 style={{ color: "var(--colorNeutralForeground4" }}>
                    <span style={{ textTransform: "uppercase" }}>
                      Principal Software Eng Mgr
                    </span>{" "}
                    <br />
                    nalini.chandhi@microsoft.com
                  </Caption1>
                </div>
              </div>

              <div className="personaButton">
                <Avatar color="colorful" name="Todd Herman" />
                <div>
                  <Body1Strong>Todd Herman</Body1Strong>
                  <br />
                  <Caption1 style={{ color: "var(--colorNeutralForeground4" }}>
                    <span style={{ textTransform: "uppercase" }}>
                      Principal Software Engineer
                    </span>{" "}
                    <br />
                    todd.herman@microsoft.com
                  </Caption1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDevelopers;
