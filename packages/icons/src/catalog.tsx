import type * as React from "react";
import { ArrowDownIcon } from "./ArrowDownIcon";
import { ArrowLeftIcon } from "./ArrowLeftIcon";
import { ArrowRightIcon } from "./ArrowRightIcon";
import { ArrowUpIcon } from "./ArrowUpIcon";
import { BellIcon } from "./BellIcon";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { ChevronLeftIcon } from "./ChevronLeftIcon";
import { ChevronRightIcon } from "./ChevronRightIcon";
import { ChevronUpIcon } from "./ChevronUpIcon";
import { CopyIcon } from "./CopyIcon";
import { CrossIcon } from "./CrossIcon";
import { CubeIcon } from "./CubeIcon";
import { EnvelopeIcon } from "./EnvelopeIcon";
import { EyeNoneIcon } from "./EyeNoneIcon";
import { EyeOpenIcon } from "./EyeOpenIcon";
import { HamburgerMenuIcon } from "./HamburgerMenuIcon";
import { HeartFilledIcon } from "./HeartFilledIcon";
import { HeartIcon } from "./HeartIcon";
import { KeyIcon } from "./KeyIcon";
import { LinkIcon } from "./LinkIcon";
import { MagnifyingGlassIcon } from "./MagnifyingGlassIcon";
import { PencilIcon } from "./PencilIcon";
import { PersonIcon } from "./PersonIcon";
import { PinIcon } from "./PinIcon";
import { StoreIcon } from "./StoreIcon";
import { TrashIcon } from "./TrashIcon";
import type { IconProps } from "./types";

export type IconCatalogEntry = {
  name: string;
  fileName: string;
  tags: string[];
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
};

export const iconCatalog: IconCatalogEntry[] = [
  {
    name: "ArrowDownIcon",
    fileName: "arrow-down",
    tags: ["arrow","down"],
    Icon: ArrowDownIcon,
  },
  {
    name: "ArrowLeftIcon",
    fileName: "arrow-left",
    tags: ["arrow","left"],
    Icon: ArrowLeftIcon,
  },
  {
    name: "ArrowRightIcon",
    fileName: "arrow-right",
    tags: ["arrow","right"],
    Icon: ArrowRightIcon,
  },
  {
    name: "ArrowUpIcon",
    fileName: "arrow-up",
    tags: ["arrow","up"],
    Icon: ArrowUpIcon,
  },
  {
    name: "BellIcon",
    fileName: "bell",
    tags: ["bell"],
    Icon: BellIcon,
  },
  {
    name: "ChevronDownIcon",
    fileName: "chevron-down",
    tags: ["chevron","down"],
    Icon: ChevronDownIcon,
  },
  {
    name: "ChevronLeftIcon",
    fileName: "chevron-left",
    tags: ["chevron","left"],
    Icon: ChevronLeftIcon,
  },
  {
    name: "ChevronRightIcon",
    fileName: "chevron-right",
    tags: ["chevron","right"],
    Icon: ChevronRightIcon,
  },
  {
    name: "ChevronUpIcon",
    fileName: "chevron-up",
    tags: ["chevron","up"],
    Icon: ChevronUpIcon,
  },
  {
    name: "CopyIcon",
    fileName: "copy",
    tags: ["copy"],
    Icon: CopyIcon,
  },
  {
    name: "CrossIcon",
    fileName: "cross",
    tags: ["cross"],
    Icon: CrossIcon,
  },
  {
    name: "CubeIcon",
    fileName: "cube",
    tags: ["cube"],
    Icon: CubeIcon,
  },
  {
    name: "EnvelopeIcon",
    fileName: "envelope",
    tags: ["envelope"],
    Icon: EnvelopeIcon,
  },
  {
    name: "EyeNoneIcon",
    fileName: "eye-none",
    tags: ["eye","none"],
    Icon: EyeNoneIcon,
  },
  {
    name: "EyeOpenIcon",
    fileName: "eye-open",
    tags: ["eye","open"],
    Icon: EyeOpenIcon,
  },
  {
    name: "HamburgerMenuIcon",
    fileName: "hamburger-menu",
    tags: ["hamburger","menu"],
    Icon: HamburgerMenuIcon,
  },
  {
    name: "HeartFilledIcon",
    fileName: "heart-filled",
    tags: ["heart","filled"],
    Icon: HeartFilledIcon,
  },
  {
    name: "HeartIcon",
    fileName: "heart",
    tags: ["heart"],
    Icon: HeartIcon,
  },
  {
    name: "KeyIcon",
    fileName: "key",
    tags: ["key"],
    Icon: KeyIcon,
  },
  {
    name: "LinkIcon",
    fileName: "link",
    tags: ["link"],
    Icon: LinkIcon,
  },
  {
    name: "MagnifyingGlassIcon",
    fileName: "magnifying-glass",
    tags: ["magnifying","glass"],
    Icon: MagnifyingGlassIcon,
  },
  {
    name: "PencilIcon",
    fileName: "pencil",
    tags: ["pencil"],
    Icon: PencilIcon,
  },
  {
    name: "PersonIcon",
    fileName: "person",
    tags: ["person"],
    Icon: PersonIcon,
  },
  {
    name: "PinIcon",
    fileName: "pin",
    tags: ["pin"],
    Icon: PinIcon,
  },
  {
    name: "StoreIcon",
    fileName: "store",
    tags: ["store"],
    Icon: StoreIcon,
  },
  {
    name: "TrashIcon",
    fileName: "trash",
    tags: ["trash"],
    Icon: TrashIcon,
  },
];
