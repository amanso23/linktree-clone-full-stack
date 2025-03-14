import {
  AlignVerticalSpaceAround,
  CalendarRange,
  ChartNoAxesColumnIncreasing,
  Eclipse,
  Settings,
  Store,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SignedIn, UserButton } from "@clerk/nextjs";

// Menu items.
const items = [
  {
    title: "Links",
    url: "#",
    icon: AlignVerticalSpaceAround,
  },
  {
    title: "Shop",
    url: "#",
    icon: Store,
  },
  {
    title: "Appearence",
    url: "#",
    icon: Eclipse,
  },
  {
    title: "Social Planner",
    url: "#",
    icon: CalendarRange,
  },
  {
    title: "Analytics",
    url: "#",
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </SidebarFooter>
    </Sidebar>
  );
}
