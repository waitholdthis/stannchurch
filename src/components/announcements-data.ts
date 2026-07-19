import content from "../../content/announcements.json";

export type Announcement = {
  title: string;
  date?: string;
  body: string;
};

export const announcements = content.announcements as Announcement[];
