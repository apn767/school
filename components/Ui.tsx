import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={cn(
        "w-full rounded-2xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-black/10",
        className
      )}
    />
  );
});
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      {...props}
      className={cn(
        "w-full rounded-2xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-black/10",
        className
      )}
    />
  );
});
Textarea.displayName = "Textarea";

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, type = "submit", ...props }, ref) => (
  <button
    ref={ref}
    {...props}
    type={type}
    className={cn(
      "rounded-2xl px-4 py-2 font-medium bg-gray-900 text-white hover:bg-black/90 disabled:opacity-50",
      className
    )}
  />
));
Button.displayName = "Button";

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, ...props }, ref) => {
  return (
    <select
      ref={ref}
      {...props}
      className={cn(
        "w-full rounded-2xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-black/10",
        className
      )}
    />
  );
});
Select.displayName = "Select";
