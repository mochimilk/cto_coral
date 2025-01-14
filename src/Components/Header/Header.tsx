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
  LeafOne,
  Beaker,
  Flow,
  WeatherSunny,
  WeatherMoon,
  Person,
  PersonFeedback,
  ArrowExit,
  Share,
  Code,
  DesignIdeas,
} from "../../Imports/bundleIcons.tsx";
import MsftLogo from "../../Imports/MsftColor.svg";
import "./Header.css";


interface HeaderPageProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const tabConfigs = [
  {
    icon: <Code />, // Add new Fluent icons in bundleIcons.tsx, then import
    value: "developers", // Route path defined in App.tsx
    label: "Developers", // Visible label on UI
  },
  {
    icon: <DesignIdeas />,
    value: "designers",
    label: "Designers",
  },
  {
    icon: <Flow />,
    value: "productManagers",
    label: "Product Managers",
  },
];



const HeaderPage: React.FC<HeaderPageProps> = ({ toggleTheme, isDarkMode }) => {
  const { shortcutLabel } = useHeaderHooks({ toggleTheme, isDarkMode });
  const navigate = useNavigate();
  const location = useLocation();

  // Map routes to TabValues
  const tabRoutes: { [key: string]: TabValue } = {
    "/home": "home",
    "/developers": "developers",
    "/designers": "designers",
    "/product-managers": "productManagers",
  };

  // Get the current tab based on the route
  const currentTab =
    Object.keys(tabRoutes).find((route) =>
      location.pathname.startsWith(route)
    ) || "/home"; // Default to "designers"

  const handleTabChange = (
    _: React.SyntheticEvent,
    data: { value: TabValue }
  ) => {
    const newRoute = Object.keys(tabRoutes).find(
      (key) => tabRoutes[key] === data.value
    );
    if (newRoute) {
      // Redirect "Developers" to its default nested route
      navigate(
        newRoute === "/developers" ? "/developers/installation" : newRoute
      );
    }
  };

  return (
    <Header
      avatarSrc={MsftLogo} // Profile icon for businesses
      title="Microsoft" // Site title
      subtitle="CTO Coral" // Optional subtitle
      badge="Docs" // Optional badge
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
                <MenuItem icon={<PersonFeedback />}>Feedback</MenuItem>
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
