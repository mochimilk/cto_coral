import * as React from "react";
import { Button } from "@fluentui/react-components";
import { MoreHorizontalRegular } from "@fluentui/react-icons";
import PanelToolbar from "../../Hooks/usePanelHooks.tsx";

// Visit https://mochimilk.github.io/cto_coral_docs/index.html#/developers/panels for documentation

const PanelLeft: React.FC = () => {
  return (
    <div className="panelLeft">
      {/* PanelToolbar */}
      <PanelToolbar
        icon={null}
        header="Panel"
      >
      <Button
        icon={<MoreHorizontalRegular />}
        appearance="subtle"
      />
      </PanelToolbar>

      {/* Content */}
      <div className="content">
        {/* Replace with Panel Content */}
      </div>
    </div>
  );
};

export default PanelLeft;
