# Quote form → Google Sheet + email notification

The contact form posts to `/api/quote`, which validates the submission and forwards it to a
Google Apps Script web app. The script appends a row to a Google Sheet and emails the enquiry
to `info@paintlink.co.nz`. Free, no API keys, no third-party form service.

Until `QUOTE_WEBHOOK_URL` is set, `/api/quote` accepts submissions and logs them to the
server console (nothing is lost in dev, but set this up before launch).

## One-time setup (~10 minutes, done from your Google account)

1. **Create the Sheet**
   - Go to [sheets.new](https://sheets.new), name it e.g. `PaintLink Website Enquiries`.
   - Put headers in row 1: `Date | Name | Phone | Email | Suburb | Service | Message`.

2. **Add the script**
   - In the Sheet: **Extensions → Apps Script**.
   - Delete the placeholder and paste the script below. Save (name it e.g. `quote-webhook`).

3. **Deploy as a web app**
   - **Deploy → New deployment → Type: Web app**.
   - Description: `PaintLink quote form`.
   - Execute as: **Me**. Who has access: **Anyone**.
   - Click **Deploy**, authorise the permissions prompt (it needs Sheets + Mail access),
     and copy the **Web app URL** (ends in `/exec`).

4. **Wire it to the site**
   - Locally: copy `.env.example` to `.env.local` and paste the URL into `QUOTE_WEBHOOK_URL`.
   - In production (Vercel/Netlify): add `QUOTE_WEBHOOK_URL` as an environment variable and
     redeploy.

5. **Test**
   - Submit the form on `/contact`. A row should appear in the Sheet and an email should
     arrive at the notification address within a minute.

> To change where notifications go, edit `NOTIFY_EMAIL` in the script and create a new
> deployment (Deploy → Manage deployments → Edit → Version: New).

## Apps Script source

```javascript
const NOTIFY_EMAIL = "info@paintlink.co.nz";

function doPost(e) {
  const data = JSON.parse(e.postData.contents);

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  sheet.appendRow([
    new Date(),
    data.name || "",
    data.phone || "",
    data.email || "",
    data.suburb || "",
    data.service || "",
    data.message || "",
  ]);

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: "New website enquiry — " + (data.name || "Unknown") +
      (data.suburb ? " (" + data.suburb + ")" : ""),
    body:
      "New quote request from paintlink.co.nz\n\n" +
      "Name:    " + (data.name || "-") + "\n" +
      "Phone:   " + (data.phone || "-") + "\n" +
      "Email:   " + (data.email || "-") + "\n" +
      "Suburb:  " + (data.suburb || "-") + "\n" +
      "Service: " + (data.service || "-") + "\n\n" +
      "Message:\n" + (data.message || "-") + "\n",
  });

  return ContentService.createTextOutput(
    JSON.stringify({ ok: true })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

## Notes

- The site's API route already includes a honeypot field and length limits, so the Sheet
  stays reasonably clean. If spam ever gets through, add a shared-secret check: send a
  `token` field from the route and reject mismatches in `doPost`.
- Apps Script quotas (100 emails/day for consumer accounts) are far beyond what a trades
  site receives.
