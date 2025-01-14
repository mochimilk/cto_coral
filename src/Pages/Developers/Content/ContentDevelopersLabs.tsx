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
  Divider,
  Title3,
  Subtitle2,
  Body1,
  Avatar,
  Caption1,
} from "@fluentui/react-components";
import {
  MoreHorizontalRegular,
  BranchRequestRegular,
  CubeRegular,
  BranchRegular,
  Cube20Regular,
} from "@fluentui/react-icons";
import {
  Code,
  DesignIdeas,
  Flow,
  PanelLeftContract,
  PanelLeftExpand,
  PanelRightContract,
  PanelRightExpand,
  Search,
} from "../../../Imports/bundleIcons.tsx";
import { useContentHooks } from "../../../Hooks/useContentHooks.tsx";
import CodeBlock from "../../../Components/CodeBlock/CodeBlock.tsx";

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
            Labs
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
          <h1>Labs</h1>

          <div className="infoTile">
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Coral.png"
              alt="Coral"
              width="32"
              height="32"
            />
            <p>
              This page is dedicated to helping develop CTO Coral. If you are
              here to build a new app or accelerator, refer to&nbsp;
              <a href="/developers/installation">installation</a>.
            </p>
          </div>

          <div>
            <p style={{ fontSize: "24px", marginBottom: "32px" }}>
              Labs aims to improve our developement process by encouraging
              developers on our team to contribute back to CTO Coral through
              branches and feedback.
            </p>
            <p>We are currently looking to improve on the following:</p>

            <ul>
              <li>
                File Tree Structuring <br />
                <Caption1 style={{ color: "var(--colorNeutralForeground3" }}>
                  Creating better file trees, allowing for a quicker
                  out-of-the-box solution
                </Caption1>
              </li>
              <li>
                Modules and Components <br />
                <Caption1 style={{ color: "var(--colorNeutralForeground3" }}>
                  Creating commonly used, reusable modules and components.
                </Caption1>
              </li>
            </ul>
          </div>

          <br />
          <Divider />
          <h3>Getting started with GitHub contributions</h3>
          <p>
            CTO Coral practices GitHub's "fork and pull" model. Forks let you
            make changes to a project without affecting the original, also known
            as "upstream", repository. After you fork a repository, you can
            fetch updates from the upstream repository to keep your fork up to
            date, and you can propose changes from your fork to the upstream
            repository with pull requests.
            <br />
            <br />
            If you are looking to make your first contribution, follow the below
            steps:
          </p>
          <ol>
            <li>Fork the repository</li>
            <li>
              Create a feature branch:{" "}
              <code className="span">
                git checkout -b feature/your-feature-name
              </code>
              .
            </li>
            <li>
              Commit your changes:{" "}
              <code className="span">
                git commit -m "Add your feature description
              </code>
              .
            </li>
            <li>
              Push to the branch:{" "}
              <code className="span">
                git push origin feature/your-feature-name
              </code>
              .
            </li>
            <li>Open a pull request.</li>
          </ol>
          <br />
          <p>
            To learn more about collaborative development, follow the link to
            GitHub's documentation:
          </p>
          <br />

          <a
            href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models"
            target="_blank"
          >
            <Button>Collaborative Development</Button>
          </a>
          <br />
          <br />
          <Divider />
          <h3>Feedback loop</h3>
        </div>
      </div>
    </div>
  );
};

export default ContentDevelopers;
