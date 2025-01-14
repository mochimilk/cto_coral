import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Header, useHeaderHooks } from "../../Hooks/useHeaderHooks.tsx";
import {
  TabList,
  Tab,
  TabValue,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  Avatar,
  Button,
} from "@fluentui/react-components";
import {
  Flow,
  WeatherSunny,
  WeatherMoon,
  Person,
  ArrowExit,
  Share,
  Cube,
} from "../../Imports/bundleIcons.tsx";
import MsftLogo from "../../Imports/MsftColor.svg";
import "./Header.css";

// Visit https://mochimilk.github.io/cto_coral_docs/index.html#/developers/header for documentation

interface HeaderPageProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const tabConfigs = [
  {
    icon: <Cube />, // Import bundle icon
    value: "default", // Route path defined in App.tsx
    label: "Default", // Visible label on UI
  },
  {
    icon: <Flow />,
    value: "auxiliary",
    label: "Auxiliary",
  },
  // Add more
];

const HeaderPage: React.FC<HeaderPageProps> = ({ toggleTheme, isDarkMode }) => {
  const { shortcutLabel } = useHeaderHooks({ toggleTheme, isDarkMode });
  const navigate = useNavigate();
  const location = useLocation();

  // Map routes to TabValues
  const tabRoutes: { [key: string]: TabValue } = {
    "/home": "home",
    "/default": "default",
    "/auxiliary": "auxiliary",
  };

  // Get the current tab based on the route
  const currentTab =
    Object.keys(tabRoutes).find((route) =>
      location.pathname.startsWith(route)
    ) || "/home"; // Default to "home"

  const handleTabChange = (
    _: React.SyntheticEvent,
    data: { value: TabValue }
  ) => {
    const newRoute = Object.keys(tabRoutes).find(
      (key) => tabRoutes[key] === data.value
    );
    if (newRoute) {
      navigate(newRoute);
    }
  };

  return (
    <Header
      avatarSrc={MsftLogo} // Profile icon for businesses
      title="Microsoft" // Site title
      subtitle="CTO Coral" // Optional subtitle
      badge="" // Optional badge
    >
      <div className="headerNav">
        <TabList
          selectedValue={tabRoutes[currentTab]}
          onTabSelect={handleTabChange}
          aria-label="Site Navigation Tabs"
          size="small"
        >
          {tabConfigs.map(({ icon, value, label }) => (
            <Tab key={value} icon={icon} value={value}>
              {label}
            </Tab>
          ))}
        </TabList>
      </div>

      {/* Tools Section */}
      <div className="headerTools">
        <Menu hasIcons positioning={{ autoSize: true }}>
          <MenuTrigger disableButtonEnhancement>
            <Avatar
              color="colorful"
              name="Pepper Hayuki"
              aria-label="App"
              badge={{ status: "out-of-office", outOfOffice: true }}
              className="clickable-avatar"
            />
          </MenuTrigger>
          <MenuPopover style={{ minWidth: "192px" }}>
            <MenuList>
              <MenuGroup>
                <MenuItem icon={<Person />}>Account</MenuItem>
                <MenuItem
                  icon={isDarkMode ? <WeatherSunny /> : <WeatherMoon />}
                  onClick={toggleTheme}
                  secondaryContent={shortcutLabel}
                >
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuItem icon={<ArrowExit />}>Logout</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
        <Button icon={<Share />} appearance="subtle" />
      </div>
    </Header>
  );
};

export default HeaderPage;
