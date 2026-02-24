# GTM / dataLayer setup (MRD V2)

## Events pushed to `dataLayer`

| Event             | When                    | Payload fields |
|-------------------|-------------------------|----------------|
| `page_impression`| App mount               | `pageName`, `pageType`, `pageLanguage`, `component` |
| `overlay_view`    | Overlay opened          | `overlayId` |
| `overlay_close`  | Overlay closed          | `overlayId` |
| `button_click`   | CTA / button click      | `component`, `componentName`, `componentType`, `componentTarget`, `componentText`, `section` |
| `link_click`     | Link / nav click        | same as above |
| `form_submit`    | Contact form submit     | `formName`, `formId` |

## GTM triggers (suggested)

- **GA4 page view:** Trigger on `page_impression` (and optionally on `overlay_view` if you want overlay as virtual page).
- **GA4 events:** Trigger on Custom Event, Event name = `button_click`, `link_click`, `form_submit`, `overlay_view`, `overlay_close`. Use the dataLayer variables (e.g. `componentName`, `componentType`, `section`) in your GA4 event tags.

## Container

Same as MRD_comingSoon: **GTM-PLDJDXDD** (in `index.html`).
