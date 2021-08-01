## Description

This webapp allows the user to search for movies.
By default, the app shows the trending movies if a query isn't provided.
To load more movies, I've used an infinite scroll in order to avoid having a button to click.
The requests are isolated from the UI components, using some custom hooks for that purpose.
Some tests (like unit tests) could be made, by I skipped those due to lack of time and a basic error handling.
The UI is very simple, but it should be easy to improve and add some functionalities.
Also, we could have loaders or placeholders when data is being fetched.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run dev
```
