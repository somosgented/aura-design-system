import { HomeIcon, PersonIcon, GearIcon } from "@radix-ui/react-icons";
import { NavigationBar, NavigationBarItem } from "@/components/ui/NavigationBar";

export const NavigationBarDemo = () => {
  return (
    <div className="max-w-xl overflow-hidden rounded-sm border border-gray-6">
      <NavigationBar>
        <NavigationBarItem active>
          <HomeIcon className="icon" />
          <span>Home</span>
        </NavigationBarItem>
        <NavigationBarItem>
          <PersonIcon className="icon" />
          <span>People</span>
        </NavigationBarItem>
        <NavigationBarItem>
          <GearIcon className="icon" />
          <span>Settings</span>
        </NavigationBarItem>
      </NavigationBar>
    </div>
  );
};