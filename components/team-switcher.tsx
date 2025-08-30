"use client"

import * as React from "react"
import { ChevronsUpDown, Plus } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    logo: React.ElementType
    plan: string
  }[]
}) {
  const { isMobile } = useSidebar()
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  if (!activeTeam) {
    return null
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="
                data-[state=open]:bg-accent data-[state=open]:text-accent-foreground
                hover:bg-accent transition-colors duration-150
                h-12 rounded-lg
                group-data-[collapsible=icon]:h-10 group-data-[collapsible=icon]:w-full group-data-[collapsible=icon]:px-0
                group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:mx-auto
              "
            >
              <div className="
                bg-primary text-primary-foreground flex aspect-square size-8 
                items-center justify-center rounded-lg
                group-data-[collapsible=icon]:size-6
              ">
                <activeTeam.logo className="size-4 group-data-[collapsible=icon]:size-3.5" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate font-medium text-foreground">{activeTeam.name}</span>
                <span className="truncate text-xs text-muted-foreground">
                  {activeTeam.plan} Plan
                </span>
              </div>
              <ChevronsUpDown className="ml-auto h-4 w-4 text-muted-foreground group-data-[collapsible=icon]:hidden" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg border shadow-md"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
              Switch Team
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {teams.map((team, index) => (
              <DropdownMenuItem
                key={team.name}
                onClick={() => setActiveTeam(team)}
                className="gap-3 p-2 hover:bg-accent"
              >
                <div className="flex size-6 items-center justify-center rounded-md bg-primary/10">
                  <team.logo className="size-3 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-foreground text-sm">{team.name}</span>
                  <span className="text-xs text-muted-foreground">{team.plan} Plan</span>
                </div>
                <DropdownMenuShortcut className="text-muted-foreground">⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-3 p-2 hover:bg-accent">
              <div className="flex size-6 items-center justify-center rounded-md border border-dashed border-border bg-muted/50">
                <Plus className="size-3 text-muted-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-foreground text-sm">Create Team</span>
                <span className="text-xs text-muted-foreground">Start a new workspace</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
