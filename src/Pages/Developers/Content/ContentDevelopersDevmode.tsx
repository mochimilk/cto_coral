import React, { useState } from "react";
import "../../../Styles/App.css";
import { Toolbar, Divider, Tag } from "@fluentui/react-components";
import { FolderOpen } from "../../../Imports/bundleIcons.tsx";
import { useContentHooks } from "../../../Hooks/useContentHooks.tsx";
import ContentToolbar from "../../../Hooks/useContentToolbarHooks.tsx";
import "../../../Modules/Content/Content.css";

interface ContentProps {
  isPanelOpen: boolean;
  togglePanel?: () => void;
  isRightPanelOpen: boolean;
  toggleRightPanel?: () => void;
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
      <ContentToolbar
        panelConfig="left" // If your page is only using one panel, define it here with "left" or "right". Removing this defaults to both.
        isPanelOpen={isPanelOpen}
        togglePanel={togglePanel}
        isRightPanelOpen={isRightPanelOpen}
        toggleRightPanel={toggleRightPanel}
        commandKey={commandKey}
      >
        <Toolbar></Toolbar>

        <Toolbar></Toolbar>
      </ContentToolbar>

      <div className="content">
        <div style={{ width: "100%", maxWidth: "728px", margin: "0 auto" }}>
          <h1>Dev Mode</h1>


          <p style={{ fontSize: "24px", marginBottom: "32px" }}>
            {" "}
            Coral relies on Figma’s Dev Mode to create a more streamlined collaborative experience between developers and designers.
          </p>
          <h3>Get started</h3>
          <ol>
            <li>
              <h3>Turn on Dev Mode</h3>
              <p>In the given Figma file, navigate to the bottom toolbar.</p>
              <img style={{width:'100%', marginTop: '32px'}}src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXYAAACHCAMAAAA1OYJfAAAAqFBMVEXHuf/////Asfv5+P28r/HCtPj19fWxpeANmf8Alv/Ctfj29vb5+fn8/PwAk/+np6fp6enR6P9tuP95vf/Nzc3k4PWysrIAkf/Y2NiZmZm9r/WampqQkJDv7+/d2PTDw8O4uLiFhYV2dnaAgICw2P+hz/+uoeHd1vnx7vvMwffRx/fRyPWn0v8hnf9Ap/+43P+Nxf9QUFBTrf9gYGAAjP9ra2vTzPG8suVRbzJAAAADiklEQVR4nO3ZD3OaSBiAcTcJnCiwnKUGRYJEY5JGEy93Tb//Nzv+SASyckOd0Vvn+XWSTkHQeXxd0fZ6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuNLcufv9FuPx6VoH0aEdT4+Dczfs7OrZEXowW/b90G3in0+W7Vht2cXzuTt2c3V9qmpHa81+PT13yU7yYR/dunuj00TsrjW7eDHOnbKD6WP6iB/cfsXt+jQVO2vPfqfTuE/v0kc8sqrZrW+nqdhZkX1oDk3TzH5HZm5Y7P2uZfbNq2sdyu4MxaFZ84Jcx4C7o4LmVvvLDR0hZ7Xszv5xmGa1u5bZ3bftctvPy3/NHs3TX6GqXxD6mXGs2PfX/UR66uyJ78fpz311m7kY+2HjTsxk4sigPHkefLh/aoaR9tmtpeu+r9fvriK7P7sPw/DvUHF97xcDa44VbcMwcuaLSJU9Lg6pPVn5c+DJ2u3m0aw57aYtHD+9Y/8yso9GluX2t28bxbSbB6d9lz1SZZfOLDbF4sCHseYh8+KFMats8sJE+Mn+uSmzL0wRxFFyCdn77jIddLe/frey7J6cDCuJatlnsX8oe7pMVKrNxSwR0W5+g3G16Nfsk+KveL8sOcUa5DWm3ZmkN1lkJ7QvILv1sLFe3x5erWLa/erbXX3aqytKc9pra0QipC/MclNcX+eb2Xenl5V31flMCi+ZfS5Tu2m3F8KPs0XpEqa9v3m4XfeVb6nB5F5K+VN2XNvFPH9VJOpLIHV2J6ltlHY66p9PV7nIeHF67Ni8jOzu8p+lq76A9MbCKVeBRvbYsVOBMrsIpR+ks6nUePMUk3SMbb9xYy9dmZKf5biX2UsXkd16f/tmqbPb2cCpr83HMqdOK6JAHqgeSDmv30d2Gr95s3mUznb5j+ICsnLdfgnZ+5Zl6fAp1cteFhnT231cKhY//bJva9/JuNszpm1TZHcirxDZTm63V6vsxkv6iK83lW8gbzf/1//2aP8q7EOr7NM88p8VJ0n4O9qz3+j0xa9x83KiaMdrzf4x1Sl7Ou4fp8p2rLbsdyutqvcMY/rr6WTljvLla+FPT79WA72y9wbGdLX6Q2ur1Y2hWfVs3gc3mhvoV72XhT9okP4x8h/F5oPH1I8Y/McR5X0MVJurp1I8jN3GcxcEAAAAAAAAAAAAAAAAAAAAAAAAgG7+BbY3Wjap3tHkAAAAAElFTkSuQmCC'} alt="Logo" />
            </li>

            <li>
              <h3>Reference docs</h3>
              <p>On the right panel should be a section called "Dev Resources". This will contain a link to either Coral or Fluent's docs.</p>
            </li>
          
          </ol>



          <br />
          <br />
          <Divider />

          <h3>What's next for Dev Mode?</h3>
        </div>
      </div>
    </div>
  );
};

export default ContentDevelopers;
