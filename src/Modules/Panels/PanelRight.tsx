import * as React from "react";
import { Button } from "@fluentui/react-components";
import { MoreHorizontalRegular, Sparkle20Filled } from "@fluentui/react-icons";
import PanelToolbar from "../../Hooks/usePanelHooks.tsx";

// Visit https://mochimilk.github.io/cto_coral_docs/index.html#/developers/panels for documentation

const PanelRight: React.FC = () => {
  return (
    <div className="panelRight">
      {/* PanelHeader */}
      <PanelToolbar
        icon={<Sparkle20Filled />}
        header="Copilot">
        <Button
          icon={<MoreHorizontalRegular />}
          appearance="subtle" />
      </PanelToolbar>

      {/* Content */}
      <div className="content">
        {/* Replace with Panel Content */}
      </div>
    </div>
  );
};

export default PanelRight;
