import { HomeIcon, PersonIcon, GearIcon } from "@radix-ui/react-icons";
import {
  NavigationRail,
  NavigationRailItem,
  NavigationRailLabel,
} from "../registry/default/components/ui/NavigationRail";

export const Default = () => {
  return (
    <div className="h-24 overflow-hidden rounded-sm border border-gray-6">
      <NavigationRail>
        <NavigationRailItem active>
          <HomeIcon className="icon" />
          <NavigationRailLabel>Home</NavigationRailLabel>
        </NavigationRailItem>
        <NavigationRailItem>
          <PersonIcon className="icon" />
          <NavigationRailLabel>People</NavigationRailLabel>
        </NavigationRailItem>
        <NavigationRailItem>
          <GearIcon className="icon" />
          <NavigationRailLabel>Settings</NavigationRailLabel>
        </NavigationRailItem>
      </NavigationRail>
    </div>
  );
};

export const Expanded = () => {
  return (
    <div className="h-24 overflow-hidden rounded-sm border border-gray-6">
      <NavigationRail expanded>
        <NavigationRailItem active>
          <HomeIcon className="icon" />
          <NavigationRailLabel>Home</NavigationRailLabel>
        </NavigationRailItem>
        <NavigationRailItem>
          <PersonIcon className="icon" />
          <NavigationRailLabel>People</NavigationRailLabel>
        </NavigationRailItem>
        <NavigationRailItem>
          <GearIcon className="icon" />
          <NavigationRailLabel>Settings</NavigationRailLabel>
        </NavigationRailItem>
      </NavigationRail>
    </div>
  );
};
