"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, X } from "lucide-react";

interface ArrayFieldProps {
  title: string;
  items: string[];
  setter: React.Dispatch<React.SetStateAction<string[]>>;
  placeholder: string;
}

export function ArrayField({ title, items, setter, placeholder }: ArrayFieldProps) {
  const addArrayItem = () => {
    setter((prev) => [...prev, ""]);
  };

  const removeArrayItem = (index: number) => {
    setter((prev) => prev.filter((_, i) => i !== index));
  };

  const updateArrayItem = (index: number, value: string) => {
    setter((prev) => prev.map((item, i) => (i === index ? value : item)));
  };

  return (
    <div>
      <Label className="text-base font-medium">{title}</Label>
      <div className="space-y-2 mt-2">
        {items.map((item, index) => (
          <div key={index} className="flex gap-2">
            <Input
              placeholder={placeholder}
              value={item}
              onChange={(e) => updateArrayItem(index, e.target.value)}
              className="flex-1"
            />
            {items.length > 1 && (
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => removeArrayItem(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          onClick={addArrayItem}
          className="flex items-center gap-2 w-full"
        >
          <Plus className="h-4 w-4" />
          Add {title.slice(0, -1)}
        </Button>
      </div>
    </div>
  );
}
