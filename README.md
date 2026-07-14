# Product Search Filter

A simple JavaScript project that filters products in real time as the user types into a search input.

## Features

- Live search using the `input` event
- Case-insensitive matching
- Hides non-matching products
- Displays a "Product does not exist" message when no products match
- Built with plain HTML, CSS, and JavaScript

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

## How It Works

1. The user types into the search input.
2. JavaScript listens for the `input` event.
3. Each product name is compared with the search text.
4. Matching products remain visible.
5. Non-matching products are hidden.
6. If no products match, a "Product does not exist" message is displayed.

## What I Learned

- Selecting DOM elements with `querySelector()` and `getElementById()`
- Iterating over elements using `forEach()`
- Using `textContent` to access element text
- Performing case-insensitive searches with `toUpperCase()`
- Using `.indexOf()` for string matching
- Showing and hiding elements with `style.display`
- Tracking search results using a boolean flag (`found`)
- Why local variables are useful for function-specific state

## Future Improvements

- Highlight matching text in search results
- Search by category
- Add product images
- Sort products alphabetically
- Display the total number of matching products

## Author

Created as a JavaScript DOM practice project.
