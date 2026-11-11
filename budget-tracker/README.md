# Personal Budget & Expense Tracker

A static, responsive first-stage budget tracker built with plain HTML and CSS. It provides the visual foundation for later additions; the form does not save or calculate expenses yet.

## Project files

- **`index.html`** — The page structure: heading and wallet icon, labeled expense form with a category dropdown, a sample expense table, collapsible usage instructions, and an embedded budgeting video.
- **`style.css`** — Page layout, colors, spacing, responsive behavior, table borders and alternating rows, hover effects, and focus styling for form controls.

## Features demonstrated

- Semantic HTML sections and a table using `thead`, `tbody`, `tr`, `th`, and `td`.
- Form labels linked to controls by matching `for` and `id` attributes; the category menu includes Food, Transport, Rent, Entertainment, and Other.
- Five sample expense rows, plus a non-functional `Add Expense` button (`type="button"`).
- An inline wallet image, responsive YouTube iframe, and expandable `details`/`summary` instructions.
- CSS descendant, direct-child, `:nth-child(even)`, `:hover`, `:not(...)`, and `:focus` selectors.

## Run locally

Open `index.html` in a browser. The embedded video requires an internet connection. Use browser DevTools to inspect elements and experiment with styles.
