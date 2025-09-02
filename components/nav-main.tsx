"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    action?: string;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup className="mb-4 group-data-[collapsible=icon]:mb-2">
      <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2 px-1 group-data-[collapsible=icon]:hidden">
        Navigation
      </SidebarGroupLabel>
      <SidebarMenu className="space-y-1 group-data-[collapsible=icon]:space-y-1">
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  className={`
                    h-9 rounded-lg transition-colors duration-150
                    hover:bg-accent hover:text-accent-foreground 
                    data-[state=open]:bg-accent/80
                    group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0
                    group-data-[collapsible=icon]:h-10 group-data-[collapsible=icon]:w-full
                    group-data-[collapsible=icon]:mx-auto
                    ${
                      item.isActive
                        ? "bg-primary/10 text-primary font-medium"
                        : ""
                    }
                  `}
                >
                  <a href={item.url} className="flex items-center w-full">
                    {item.icon && (
                      <item.icon
                        className={`
                        h-4 w-4 mr-3
                        group-data-[collapsible=icon]:h-4 group-data-[collapsible=icon]:w-4 group-data-[collapsible=icon]:mr-0
                        ${
                          item.isActive
                            ? "text-primary"
                            : "text-muted-foreground"
                        }
                      `}
                      />
                    )}
                    <span className="text-sm group-data-[collapsible=icon]:hidden">
                      {item.title}
                    </span>
                    {item.items && item.items.length > 0 && (
                      <ChevronRight className="ml-auto h-3 w-3 text-muted-foreground transition-transform duration-150 group-data-[state=open]/collapsible:rotate-90 group-data-[collapsible=icon]:hidden" />
                    )}
                  </a>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              {item.items && item.items.length > 0 && (
                <CollapsibleContent className="pl-4 mt-1 group-data-[collapsible=icon]:hidden">
                  <SidebarMenuSub className="space-y-1 border-l border-border/50 pl-2">
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          asChild
                          className="h-7 rounded-md hover:bg-accent text-xs text-muted-foreground hover:text-foreground transition-colors duration-150"
                        >
                          <a href={subItem.url}>
                            <span className="ml-2">{subItem.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              )}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
