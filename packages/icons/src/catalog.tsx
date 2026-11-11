import type * as React from "react";
import { ArrowBottomLeftIcon } from "./ArrowBottomLeftIcon";
import { ArrowBottomRightIcon } from "./ArrowBottomRightIcon";
import { ArrowDownIcon } from "./ArrowDownIcon";
import { ArrowLeftIcon } from "./ArrowLeftIcon";
import { ArrowRightIcon } from "./ArrowRightIcon";
import { ArrowTopLeftIcon } from "./ArrowTopLeftIcon";
import { ArrowTopRightIcon } from "./ArrowTopRightIcon";
import { ArrowUpIcon } from "./ArrowUpIcon";
import { BellIcon } from "./BellIcon";
import { BugIcon } from "./BugIcon";
import { CalendarIcon } from "./CalendarIcon";
import { CameraIcon } from "./CameraIcon";
import { CaretDownIcon } from "./CaretDownIcon";
import { CaretLeftIcon } from "./CaretLeftIcon";
import { CaretRightIcon } from "./CaretRightIcon";
import { CaretSortIcon } from "./CaretSortIcon";
import { CaretUpIcon } from "./CaretUpIcon";
import { CheckIcon } from "./CheckIcon";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { ChevronLeftIcon } from "./ChevronLeftIcon";
import { ChevronRightIcon } from "./ChevronRightIcon";
import { ChevronUpIcon } from "./ChevronUpIcon";
import { CloudIcon } from "./CloudIcon";
import { ContactsIcon } from "./ContactsIcon";
import { CopyIcon } from "./CopyIcon";
import { CrossIcon } from "./CrossIcon";
import { CubeIcon } from "./CubeIcon";
import { DoubleArrowDownIcon } from "./DoubleArrowDownIcon";
import { DoubleArrowLeftIcon } from "./DoubleArrowLeftIcon";
import { DoubleArrowRightIcon } from "./DoubleArrowRightIcon";
import { DoubleArrowUpIcon } from "./DoubleArrowUpIcon";
import { DownloadIcon } from "./DownloadIcon";
import { EnvelopeIcon } from "./EnvelopeIcon";
import { EyeNoneIcon } from "./EyeNoneIcon";
import { EyeOpenIcon } from "./EyeOpenIcon";
import { FaceIcon } from "./FaceIcon";
import { FilterIcon } from "./FilterIcon";
import { FolderIcon } from "./FolderIcon";
import { GroupIcon } from "./GroupIcon";
import { HamburgerMenuIcon } from "./HamburgerMenuIcon";
import { HeartFilledIcon } from "./HeartFilledIcon";
import { HeartIcon } from "./HeartIcon";
import { HomeIcon } from "./HomeIcon";
import { IdCardIcon } from "./IdCardIcon";
import { KeyIcon } from "./KeyIcon";
import { LinkIcon } from "./LinkIcon";
import { LockIcon } from "./LockIcon";
import { MagnifyingGlassIcon } from "./MagnifyingGlassIcon";
import { MessageIcon } from "./MessageIcon";
import { PencilIcon } from "./PencilIcon";
import { PersonAddIcon } from "./PersonAddIcon";
import { PersonCheckIcon } from "./PersonCheckIcon";
import { PersonDeleteIcon } from "./PersonDeleteIcon";
import { PersonIcon } from "./PersonIcon";
import { PinIcon } from "./PinIcon";
import { RocketIcon } from "./RocketIcon";
import { SettingsIcon } from "./SettingsIcon";
import { ShareIcon } from "./ShareIcon";
import { StarIcon } from "./StarIcon";
import { StoreIcon } from "./StoreIcon";
import { ThunderboltIcon } from "./ThunderboltIcon";
import { TrashIcon } from "./TrashIcon";
import { TriangleDownIcon } from "./TriangleDownIcon";
import { TriangleLeftIcon } from "./TriangleLeftIcon";
import { TriangleRightIcon } from "./TriangleRightIcon";
import { TriangleUpIcon } from "./TriangleUpIcon";
import { TrophyIcon } from "./TrophyIcon";
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
    name: "ArrowBottomLeftIcon",
    fileName: "arrow-bottom-left",
    tags: ["arrow","bottom","left"],
    Icon: ArrowBottomLeftIcon,
  },
  {
    name: "ArrowBottomRightIcon",
    fileName: "arrow-bottom-right",
    tags: ["arrow","bottom","right"],
    Icon: ArrowBottomRightIcon,
  },
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
    name: "ArrowTopLeftIcon",
    fileName: "arrow-top-left",
    tags: ["arrow","top","left"],
    Icon: ArrowTopLeftIcon,
  },
  {
    name: "ArrowTopRightIcon",
    fileName: "arrow-top-right",
    tags: ["arrow","top","right"],
    Icon: ArrowTopRightIcon,
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
    name: "BugIcon",
    fileName: "bug",
    tags: ["bug"],
    Icon: BugIcon,
  },
  {
    name: "CalendarIcon",
    fileName: "calendar",
    tags: ["calendar"],
    Icon: CalendarIcon,
  },
  {
    name: "CameraIcon",
    fileName: "camera",
    tags: ["camera"],
    Icon: CameraIcon,
  },
  {
    name: "CaretDownIcon",
    fileName: "caret-down",
    tags: ["caret","down"],
    Icon: CaretDownIcon,
  },
  {
    name: "CaretLeftIcon",
    fileName: "caret-left",
    tags: ["caret","left"],
    Icon: CaretLeftIcon,
  },
  {
    name: "CaretRightIcon",
    fileName: "caret-right",
    tags: ["caret","right"],
    Icon: CaretRightIcon,
  },
  {
    name: "CaretSortIcon",
    fileName: "caret-sort",
    tags: ["caret","sort"],
    Icon: CaretSortIcon,
  },
  {
    name: "CaretUpIcon",
    fileName: "caret-up",
    tags: ["caret","up"],
    Icon: CaretUpIcon,
  },
  {
    name: "CheckIcon",
    fileName: "check",
    tags: ["check"],
    Icon: CheckIcon,
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
    name: "CloudIcon",
    fileName: "cloud",
    tags: ["cloud"],
    Icon: CloudIcon,
  },
  {
    name: "ContactsIcon",
    fileName: "contacts",
    tags: ["contacts"],
    Icon: ContactsIcon,
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
    name: "DoubleArrowDownIcon",
    fileName: "double-arrow-down",
    tags: ["double","arrow","down"],
    Icon: DoubleArrowDownIcon,
  },
  {
    name: "DoubleArrowLeftIcon",
    fileName: "double-arrow-left",
    tags: ["double","arrow","left"],
    Icon: DoubleArrowLeftIcon,
  },
  {
    name: "DoubleArrowRightIcon",
    fileName: "double-arrow-right",
    tags: ["double","arrow","right"],
    Icon: DoubleArrowRightIcon,
  },
  {
    name: "DoubleArrowUpIcon",
    fileName: "double-arrow-up",
    tags: ["double","arrow","up"],
    Icon: DoubleArrowUpIcon,
  },
  {
    name: "DownloadIcon",
    fileName: "download",
    tags: ["download"],
    Icon: DownloadIcon,
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
    name: "FaceIcon",
    fileName: "face",
    tags: ["face"],
    Icon: FaceIcon,
  },
  {
    name: "FilterIcon",
    fileName: "filter",
    tags: ["filter"],
    Icon: FilterIcon,
  },
  {
    name: "FolderIcon",
    fileName: "folder",
    tags: ["folder"],
    Icon: FolderIcon,
  },
  {
    name: "GroupIcon",
    fileName: "group",
    tags: ["group"],
    Icon: GroupIcon,
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
    name: "HomeIcon",
    fileName: "home",
    tags: ["home"],
    Icon: HomeIcon,
  },
  {
    name: "IdCardIcon",
    fileName: "id-card",
    tags: ["id","card"],
    Icon: IdCardIcon,
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
    name: "LockIcon",
    fileName: "lock",
    tags: ["lock"],
    Icon: LockIcon,
  },
  {
    name: "MagnifyingGlassIcon",
    fileName: "magnifying-glass",
    tags: ["magnifying","glass"],
    Icon: MagnifyingGlassIcon,
  },
  {
    name: "MessageIcon",
    fileName: "message",
    tags: ["message"],
    Icon: MessageIcon,
  },
  {
    name: "PencilIcon",
    fileName: "pencil",
    tags: ["pencil"],
    Icon: PencilIcon,
  },
  {
    name: "PersonAddIcon",
    fileName: "person-add",
    tags: ["person","add"],
    Icon: PersonAddIcon,
  },
  {
    name: "PersonCheckIcon",
    fileName: "person-check",
    tags: ["person","check"],
    Icon: PersonCheckIcon,
  },
  {
    name: "PersonDeleteIcon",
    fileName: "person-delete",
    tags: ["person","delete"],
    Icon: PersonDeleteIcon,
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
    name: "RocketIcon",
    fileName: "rocket",
    tags: ["rocket"],
    Icon: RocketIcon,
  },
  {
    name: "SettingsIcon",
    fileName: "settings",
    tags: ["settings"],
    Icon: SettingsIcon,
  },
  {
    name: "ShareIcon",
    fileName: "share",
    tags: ["share"],
    Icon: ShareIcon,
  },
  {
    name: "StarIcon",
    fileName: "star",
    tags: ["star"],
    Icon: StarIcon,
  },
  {
    name: "StoreIcon",
    fileName: "store",
    tags: ["store"],
    Icon: StoreIcon,
  },
  {
    name: "ThunderboltIcon",
    fileName: "thunderbolt",
    tags: ["thunderbolt"],
    Icon: ThunderboltIcon,
  },
  {
    name: "TrashIcon",
    fileName: "trash",
    tags: ["trash"],
    Icon: TrashIcon,
  },
  {
    name: "TriangleDownIcon",
    fileName: "triangle-down",
    tags: ["triangle","down"],
    Icon: TriangleDownIcon,
  },
  {
    name: "TriangleLeftIcon",
    fileName: "triangle-left",
    tags: ["triangle","left"],
    Icon: TriangleLeftIcon,
  },
  {
    name: "TriangleRightIcon",
    fileName: "triangle-right",
    tags: ["triangle","right"],
    Icon: TriangleRightIcon,
  },
  {
    name: "TriangleUpIcon",
    fileName: "triangle-up",
    tags: ["triangle","up"],
    Icon: TriangleUpIcon,
  },
  {
    name: "TrophyIcon",
    fileName: "trophy",
    tags: ["trophy"],
    Icon: TrophyIcon,
  },
];
