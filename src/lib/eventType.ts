import type { EventType } from "@/data/events";

export const typeLabel: Record<EventType, string> = {
  rugpull: "Rugpull",
  runner: "Runner",
  milestone: "Milestone",
  hack: "Hack",
  collapse: "Collapse",
  seizure: "Seizure"
};

export const typeVariant: Record<EventType, "red" | "green" | "gold" | "dark"> = {
  rugpull: "red",
  runner: "green",
  milestone: "gold",
  hack: "dark",
  collapse: "dark",
  seizure: "dark"
};




