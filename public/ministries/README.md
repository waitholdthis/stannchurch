# Ministry & Organization Photos

Drop photos for ministries and parish life organizations in this folder (landscape orientation, roughly 3:2 — e.g. 900×600 — works best).

Then in `src/components/Ministries.tsx`, add an `image` line to the matching ministry or organization entry, for example:

```ts
{
  icon: Cross,
  title: "Altar Servers",
  desc: "...",
  contact: { ... },
  image: "/ministries/altar-servers.jpg",
},
```

Any ministry or organization without an `image` line automatically shows the "Photo Coming Soon" placeholder.
