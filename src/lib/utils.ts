import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ZodIssue, ZodError } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const formatZodIssue = (issue: ZodIssue): string => {
  const { path, message } = issue;
  const pathString = path.join(".");

  return `${pathString}: ${message}`;
};

// Format the Zod error message with only the current error
export const formatZodError = (error: ZodError): string => {
  const { issues } = error;

  if (issues.length) {
    const currentIssue = issues
      .map((issue) => formatZodIssue(issue))
      .join(", ");

    return currentIssue;
  }
  return "";
};
