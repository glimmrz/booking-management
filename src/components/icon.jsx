import {
  ChartArea,
  ChevronDown,
  CircleHelp,
  CircleUserRound,
  Code,
  LayoutDashboard,
  MessageSquare,
  MessageSquareText,
  Search,
  Settings,
  ShieldCheck,
  Store,
  UsersRound,
} from "lucide-react";

const Icons = {
  search: Search,
  chevronDown: ChevronDown,
  chat: MessageSquareText,
  message: MessageSquare,
  dashboard: LayoutDashboard,
  chart: ChartArea,
  settings: Settings,
  user: CircleUserRound,
  group: UsersRound,
  security: ShieldCheck,
  shop: Store,
  code: Code,
  question: CircleHelp,
};

export default function Icon({
  size = 16,
  icon = "",
  iconColor,
  strokeWidth = 1,
}) {
  const CurrentIcon = Icons[icon];

  if (!CurrentIcon) return null;

  return (
    <CurrentIcon
      size={size}
      color={iconColor}
      height={size}
      width={size}
      strokeWidth={strokeWidth}
    />
  );
}
