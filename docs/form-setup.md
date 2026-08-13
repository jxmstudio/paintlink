# Quote form → JXM Forms

The contact form posts straight from the browser to the JXM Forms backend. There is no
Next.js API route, no environment variable and no third-party form service in between.
JXM stores the submission, emails it on, and does the spam filtering server side.

**Endpoint:** `https://jxm-forms.vercel.app/api/submit/paintlink`

Both the endpoint and the API key live in `src/components/QuoteForm.tsx`. The key is public
by design: it identifies the site, it doesn't authorise anything, so shipping it in the
client bundle is expected.

## How it submits

```js
await fetch(FORM_ENDPOINT, {
  method: "POST",
  headers: { "content-type": "application/json", "x-api-key": FORM_API_KEY },
  body: JSON.stringify(data),
});
```

A `200` with `{"ok":true}` means it landed. The form renders its own thank-you state, so
there's no `_redirect` and no `/thanks` page.

`data` is every named field on the form, so adding a field to the markup is enough to get it
stored and emailed. There's no schema to keep in sync at the JXM end.

## Things not to break

- **`_gotcha` must stay.** It's the hidden bot trap JXM checks, and it must submit empty.
  It replaced the old `company_website` honeypot, which JXM doesn't know about.
- **Keep sending an `email` field.** JXM uses it as the Reply-To on the notification.
  Note the field is currently optional on the form, so a submission without one will still
  be stored and emailed, just without a working Reply-To. Make the input `required` if that
  matters.

## Testing

Submit the form on `/contact`, then ask JXM to confirm it arrived in the dashboard. A real
submission goes all the way through to the notification inbox, so use obvious test content.

## History

This replaced a Google Apps Script webhook behind a `/api/quote` route, wired up with a
`QUOTE_WEBHOOK_URL` env var. Both the route and the variable are gone; if the env var is
still set in the hosting dashboard it's now unused and can be deleted.
