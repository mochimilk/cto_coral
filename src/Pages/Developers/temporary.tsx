import React, { useState } from "react";
import "../../Styles/App.css";
import {
  Button,
  Tooltip,
  Toolbar,
} from "@fluentui/react-components";
import {
  PanelLeftContract,
  PanelLeftExpand,
} from "../../Imports/bundleIcons.tsx";
import { useContentHooks } from "../../Hooks/useContentHooks.tsx";

interface ContentProps {
  isPanelOpen: boolean;
  togglePanel?: () => void;
}

const ContentDevelopers: React.FC<ContentProps> = ({
  isPanelOpen,
  togglePanel,
}) => {
  const { commandKey } = useContentHooks({ togglePanel });

  return (
    <div className="panelHeader">
      <div className="panelHeaderTitleGroup">
        {" "}
        {togglePanel && (
          <Tooltip content={`${commandKey} + ←`} relationship="label">
            <Button
              icon={isPanelOpen ? <PanelLeftContract /> : <PanelLeftExpand />}
              onClick={togglePanel}
              appearance="subtle"
            />
          </Tooltip>
        )}
        <Toolbar>
        </Toolbar>
      </div>

      <Toolbar>
      </Toolbar>
    </div>
  );
};

export default ContentDevelopers;

<PanelHeader>
<Toolbar>
</Toolbar>
<Toolbar>
</Toolbar>
</PanelHeader>