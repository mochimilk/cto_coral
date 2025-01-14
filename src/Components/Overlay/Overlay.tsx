import React, { useRef } from "react";
import "./Overlay.css";
import { Body1Strong, Button } from "@fluentui/react-components";
import {DismissRegular} from "@fluentui/react-icons"

interface OverlayProps {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
}

const Overlay: React.FC<OverlayProps> = ({ isVisible, onClose, title, children }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: React.MouseEvent) => {
    if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="overlay" onClick={handleOutsideClick}>
      <div className="overlayContent" ref={overlayRef}>
        <div className="overlayHeader">
          {title && <Body1Strong className="overlayTitle">{title}</Body1Strong>}
          <Button icon={<DismissRegular />} appearance="subtle" className="closeButton" onClick={onClose}>
            
          </Button>
        </div>
        <div className="overlayBody">{children}</div>
      </div>
    </div>
  );
};

export default Overlay;
