"use client"

import * as React from "react"
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "group/calendar rounded-2xl border border-zinc-800 bg-zinc-950/95 p-3 text-zinc-100 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm [--cell-size:2.45rem] sm:[--cell-size:2.65rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: "w-full",
        months: "flex w-full flex-col",
        month: "w-full space-y-3",
        nav: cn(
          "absolute inset-x-0 top-0 flex items-center justify-between"
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-9 rounded-full border border-zinc-700 bg-zinc-900 p-0 text-zinc-100 shadow-none hover:border-red-500/60 hover:bg-zinc-800"
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-9 rounded-full border border-zinc-700 bg-zinc-900 p-0 text-zinc-100 shadow-none hover:border-red-500/60 hover:bg-zinc-800"
        ),
        month_caption: cn(
          "relative flex h-9 items-center justify-center"
        ),
        dropdowns: cn(
          "flex items-center justify-center gap-2 text-sm font-semibold tracking-[0.08em] uppercase text-zinc-100"
        ),
        dropdown_root: cn(
          "relative rounded-md border border-zinc-700 bg-zinc-900 px-2 text-zinc-100 shadow-none"
        ),
        dropdown: cn(
          "absolute inset-0 opacity-0"
        ),
        caption_label: cn(
          "select-none font-semibold tracking-[0.08em] uppercase text-zinc-100",
          captionLayout === "label"
            ? "text-sm"
            : "flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5 [&>svg]:text-zinc-400"
        ),
        month_grid: "w-full border-separate border-spacing-y-1.5",
        table: "w-full border-separate border-spacing-y-1.5",
        weekdays: "grid grid-cols-7 gap-1",
        weekday: cn(
          "flex h-8 items-center justify-center text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-zinc-500"
        ),
        week: "grid grid-cols-7 gap-1",
        week_number_header: cn(
          "flex h-(--cell-size) w-(--cell-size) items-center justify-center text-zinc-500"
        ),
        week_number: cn(
          "flex h-(--cell-size) w-(--cell-size) items-center justify-center text-[0.8rem] text-zinc-500"
        ),
        day: cn(
          "relative flex items-center justify-center p-0 text-center"
        ),
        day_button:
          "flex h-(--cell-size) w-(--cell-size) items-center justify-center rounded-xl border border-transparent bg-transparent text-sm font-medium text-zinc-100 transition-all duration-200 hover:border-red-500/35 hover:bg-zinc-900 hover:text-white",
        selected:
          "[&>button]:border-red-500 [&>button]:bg-red-600 [&>button]:text-white [&>button]:shadow-[0_10px_30px_rgba(220,38,38,0.35)]",
        range_start: "rounded-l-xl",
        range_middle: "rounded-none",
        range_end: "rounded-r-xl",
        today: cn(
          "[&>button]:border-zinc-700 [&>button]:bg-zinc-900 [&>button]:text-white"
        ),
        outside: cn(
          "[&>button]:text-zinc-600 [&>button]:opacity-50"
        ),
        disabled: cn(
          "[&>button]:cursor-not-allowed [&>button]:border-transparent [&>button]:text-zinc-700 [&>button]:opacity-60 [&>button]:hover:bg-transparent"
        ),
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("size-4", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("size-4", className)}
                {...props}
              />
            )
          }

          return (
            <ChevronDownIcon className={cn("size-4", className)} {...props} />
          )
        },
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex h-(--cell-size) w-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}
export { Calendar }
