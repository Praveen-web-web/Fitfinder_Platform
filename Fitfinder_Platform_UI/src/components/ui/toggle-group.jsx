"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

import { cn } from "./utils";
import { toggleVariants } from "./toggleVariants";

// ---------------------------------------------
// Context (no TypeScript)
// ---------------------------------------------
const ToggleGroupContext = React.createContext({
  size: "default",
  variant: "default",
});

// ---------------------------------------------
// ToggleGroup (Root)
// ---------------------------------------------
function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      className={cn(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
}

// ---------------------------------------------
// ToggleGroupItem
// ---------------------------------------------
function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}) {
  const context = React.useContext(ToggleGroupContext);

  const finalVariant = context.variant || variant;
  const finalSize = context.size || size;

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={finalVariant}
      data-size={finalSize}
      className={cn(
        toggleVariants({
          variant: finalVariant,
          size: finalSize,
        }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
}

export { ToggleGroup, ToggleGroupItem };
