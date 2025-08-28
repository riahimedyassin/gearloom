"use client";

import * as React from "react";
import { Check, ChevronsUpDown, User } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User as UserType } from "../types";

// Mock users list - in a real app this would come from an API
const MOCK_USERS: UserType[] = [
  { id: 1, firstname: "John", lastname: "Doe", email: "john@example.com" },
  { id: 2, firstname: "Jane", lastname: "Smith", email: "jane@example.com" },
  { id: 3, firstname: "Mike", lastname: "Johnson", email: "mike@example.com" },
  { id: 4, firstname: "Sarah", lastname: "Williams", email: "sarah@example.com" },
  { id: 5, firstname: "David", lastname: "Brown", email: "david@example.com" },
  { id: 6, firstname: "Emma", lastname: "Davis", email: "emma@example.com" },
];

interface UserComboboxProps {
  value?: UserType;
  onSelect: (user: UserType | undefined) => void;
  placeholder?: string;
  allowUnassigned?: boolean;
  className?: string;
}

export function UserCombobox({ 
  value, 
  onSelect, 
  placeholder = "Select user...",
  allowUnassigned = false,
  className 
}: UserComboboxProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-start gap-2 h-auto py-2", className)}
        >
          {value ? (
            <>
              <Avatar className="w-6 h-6">
                <AvatarFallback className="bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 text-xs font-semibold">
                  {value.firstname[0]}{value.lastname[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-left min-w-0">
                <p className="text-sm font-medium text-slate-900 truncate">
                  {value.firstname} {value.lastname}
                </p>
              </div>
            </>
          ) : (
            <>
              <User className="w-4 h-4 text-slate-400" />
              <span className="text-sm text-slate-500">{placeholder}</span>
            </>
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0">
        <Command>
          <CommandInput placeholder="Search users..." />
          <CommandList>
            <CommandEmpty>No user found.</CommandEmpty>
            <CommandGroup>
              {allowUnassigned && (
                <CommandItem
                  key="unassigned"
                  value="unassigned"
                  onSelect={() => {
                    onSelect(undefined);
                    setOpen(false);
                  }}
                  className="flex items-center gap-3 py-3"
                >
                  <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center">
                    <User className="w-3 h-3 text-slate-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900">
                      Unassigned
                    </p>
                  </div>
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      !value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              )}
              {MOCK_USERS.map((user) => (
                <CommandItem
                  key={user.id}
                  value={`${user.firstname} ${user.lastname} ${user.email}`}
                  onSelect={() => {
                    onSelect(user);
                    setOpen(false);
                  }}
                  className="flex items-center gap-3 py-3"
                >
                  <Avatar className="w-6 h-6">
                    <AvatarFallback className="bg-gradient-to-br from-slate-100 to-slate-200 text-slate-700 text-xs font-semibold">
                      {user.firstname[0]}{user.lastname[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 truncate">
                      {user.firstname} {user.lastname}
                    </p>
                    <p className="text-xs text-slate-500 truncate">
                      {user.email}
                    </p>
                  </div>
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value?.id === user.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default UserCombobox;
