## Quote Generator

### Overview

** The LSA Quote Generator is a React-based application that displays random quotes and allows users to save and manage their favorite quotes. The application consists of two primary pages: Home, which displays a randomly selected quote, and Favorites, which displays all quotes marked as favorites by the user.

The UI design is inspired by the structure and layout of the IGA website, featuring a header, navigation bar, main content area, and footer, with responsive styling implemented using CSS.

A local dataset was implemented to keep the application simple, stable, and focused on demonstrating core React concepts such as component structure, state management, and client-side routing. **

1.	UI Design## Quote Generator

### Overview

The LSA Quote Generator is a React-based application that displays random quotes and allows users to save and manage their favorite quotes. The application consists of two primary pages: **Home**, which displays a randomly selected quote, and **Favorites**, which displays all quotes marked as favorites by the user.

The UI design is inspired by the structure and layout of the IGA website, featuring a header, navigation bar, main content area, and footer, with responsive styling implemented using CSS.

A local dataset is used as the quote source to keep the application simple, stable, and focused on demonstrating core React concepts such as component structure, state management, and client-side routing.

---

## 1. UI Design

The layout was designed to replicate the visual feel of the IGA website, incorporating a header with the State of Indiana logo and welcome message, a navigation bar, a main content area, and a sticky footer. The application includes responsive styling to demonstrate adaptable layout behavior.

---

## 2. Static Data as Quote Source

Quotes are stored locally in `quotes.js`. Each quote contains an `id`, `text`, and `author`. Random quotes are selected programmatically from this static dataset.

---

## 3. Component Reusability

Reusable components were implemented to promote clean architecture and avoid duplication. The `Header`, `Navbar`, and `QuoteCard` components are designed to be reused across the application, ensuring consistent layout and UI behavior while maintaining separation of concerns.

---

## 4. Favorites State Management & Persistence

The Favorites page updates instantly when a quote is favorited or unfavorited, without requiring a page refresh, demonstrating real-time UI updates through React state management. Favorite quotes are persisted using `localStorage`, ensuring they remain saved even after the browser is reloaded.

---

## 5. Dynamic Routing & URL Updates

Client-side routing is implemented using `react-router-dom`. The URL updates dynamically based on the active route (e.g., `/` for Home and `/favorites` for Favorites), and the active navigation link is visually highlighted to reflect the current page. The browser tab title also updates dynamically depending on the active page.

---

## 6. Random Quote Functionality

A random quote is displayed on initial page load and whenever the "New Quote" button is clicked. Quotes are selected programmatically from the static dataset using React state.

---

## 7. Favorite Toggle Logic

Quotes can be marked as favorites by clicking the star icon. When selected, the star turns yellow and the quote is added to the Favorites page. Clicking the star again removes the quote from favorites and resets the star to its default state.

---

## 8. Copy to Clipboard

Quotes can be copied by clicking the "Copy" button, which utilizes the browser’s Clipboard API. A toast notification appears to confirm that the quote has been successfully copied.

---

## How to Run the Project

### Prerequisite

Make sure Node.js is installed on your system. You can confirm this by running:

node -v


If it is not installed, download and install it from:  
https://nodejs.org/en

---

### Installation Steps

1. Clone the repository:

git clone https://github.com/hamzaalmani/Quote_Generator.git

2.	Install dependencies: 

npm install

3.	Run the development server: 

npm run dev

4.	Press command and click on link shown in the terminal (e.g. http:localhost:5173)
