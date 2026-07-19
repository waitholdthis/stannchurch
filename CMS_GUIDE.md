# St. Ann Parish Content Manager

The visual content manager is available at:

- Live site: `https://waitholdthis.github.io/stannchurch/admin/`
- Local preview: `http://localhost:3001/admin`

## First-time sign in

1. Ask the repository owner to add the staff member as a collaborator on `waitholdthis/stannchurch` with write access.
2. Open the content manager and choose **Sign in with token**.
3. Follow the on-screen GitHub link to create a fine-grained access token for this repository, then paste it into the sign-in window.

The token stays in that browser. Staff do not need to download the project or edit code.

## Publishing content

1. Choose **Announcements**, **Events**, **Bulletins**, **Sermons**, or **Watch Live**.
2. Open the matching content list.
3. Add, edit, remove, or reorder items using the form.
4. Select **Save**. The change is committed to GitHub and the normal site deployment starts automatically.

For bulletins, staff may upload a PDF or paste an external link. For sermons, staff may upload audio or paste a video link. Avoid having two staff members edit the same content list at the same time.

## Updating the Sunday livestream

The **Watch Live** page on the site embeds the Facebook live video so visitors can watch without a Facebook account.

1. On Facebook, schedule the live video ahead of time (or open the live post once it starts) and copy its link — it looks like `https://www.facebook.com/StAnnFayettevilleNorthCarolina/videos/1234567890`.
2. In the content manager, open **Watch Live → Livestream settings**.
3. Paste the link into **Facebook video link** and select **Save**.

Save the link a little while before Mass — the site takes a few minutes to redeploy after each save. Scheduling the live video on Facebook the day before gives its link early, so the site can be updated well ahead of Sunday. If the link is left blank, the page shows a "check back soon" message with a button to the Facebook page.
