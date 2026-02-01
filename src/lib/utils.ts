import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseEventDate(dateString: string): number {
  const parsed = Date.parse(dateString);
  if (!Number.isNaN(parsed)) {
    return parsed;
  }
  const yearMatch = dateString.match(/^(\d{4})/);
  if (yearMatch) {
    return Date.parse(`${yearMatch[1]}-01-01`);
  }
  return 0;
}

export function compareEventDatesDesc(a: { date: string }, b: { date: string }) {
  return parseEventDate(b.date) - parseEventDate(a.date);
}

export function compareEventDatesAsc(a: { date: string }, b: { date: string }) {
  return parseEventDate(a.date) - parseEventDate(b.date);
}





