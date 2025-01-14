import React from "react";
import "../../Styles/App.css";
import { Toolbar, ToolbarButton } from "@fluentui/react-components";
import { Link } from "../../Imports/bundleIcons.tsx";
import { useContentHooks } from "../../Hooks/useContentHooks.tsx";
import ContentToolbar from "../../Hooks/useContentToolbarHooks.tsx";

interface ContentProps {
  isPanelOpen: boolean;
  togglePanel?: () => void; // Optional to conditionally render left toggle
  isRightPanelOpen: boolean;
  toggleRightPanel?: () => void; // Optional to conditionally render left toggle
}

const ContentDevelopers: React.FC<ContentProps> = ({
  isPanelOpen,
  togglePanel,
  isRightPanelOpen,
  toggleRightPanel,
}) => {
  const { commandKey } = useContentHooks({ togglePanel, toggleRightPanel });

  return (
    <div className="contentContainer">
      {/*📌 Below is the setup for the content toolbar.
       ***You may remove this if your app doesn't need a toolbar. */}

<ContentToolbar
        panelConfig="both" // If your page is only using one panel, define it here with "left" or "right". Removing this defaults to both.
        isPanelOpen={isPanelOpen}
        togglePanel={togglePanel}
        isRightPanelOpen={isRightPanelOpen}
        toggleRightPanel={toggleRightPanel}
        commandKey={commandKey}
      >
        <Toolbar></Toolbar>
        <Toolbar>
          <ToolbarButton icon={<Link />}></ToolbarButton>
        </Toolbar>
      </ContentToolbar>

      {/*📌 Below is the setup for Content.
       ***You can import just about anything into className"content" and it should show up in the content panel
       ***Don't forget call your import above!
       ***/}

      <div className="content"></div>
    </div>
  );
};

export default ContentDevelopers;
