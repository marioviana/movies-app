## Description

This webapp allows the user to search for movies.

By default, the app shows the trending movies if a query isn't provided.

To load more movies, I've used an infinite scroll in order to avoid having a button to click.

The requests are isolated from the UI components, using some custom hooks for that purpose.

To be production ready, I would add some tests (such as unit tests) and improve the error handling (notifying the user with some sort of alert when an error occurs and deal with it gracefully).

The UI is very simple, but it should be easy to improve and add some functionalities.

Finally, regarding the API key, not secure for a production app, but it's present on the custom hooks hardcoded for this challenge.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run dev
```

