// Parish announcements — edit this list to update the homepage "Announcements"
// section and the notice strip on the Events page. Newest first.
export type Announcement = {
  title: string;
  date?: string; // optional display date, e.g. "July 13, 2026"
  body: string;
};

export const announcements: Announcement[] = [
  {
    title: "No Communion Service",
    date: "Monday, July 13, 2026",
    body: "There will be no Communion Service on Monday, July 13. Deacon Gary will not be available.",
  },
  {
    title: "Thursday Daily Mass Update",
    date: "June 4 – August 6, 2026",
    body: "From June 4 until August 6, our Thursday daily Mass will be at 12:15 PM instead of the usual morning School Mass.",
  },
  {
    title: "Parking",
    body: "Our parish family is growing rapidly, and parking is becoming a challenge. We are working on both short-term and long-term solutions to this good problem. For now, please know that you may park behind the office building by driving through the dumpster area.",
  },
];
