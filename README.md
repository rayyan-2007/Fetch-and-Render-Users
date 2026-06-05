# Fetch User Data from Backend to Frontend Using JavaScript

## Overview
This project fetches user data from an API and displays it on the webpage using JavaScript.

## Technologies
- HTML
- CSS
- JavaScript
- Fetch API

## Code

```javascript
async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        console.log(users);
    } catch (error) {
        console.error(error);
    }
}

fetchUsers();
