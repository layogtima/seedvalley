# SeedBank - Claude Guidance

## Project Overview

SeedBank is a static web app using Vue.js and Tailwind CSS that provides information about growing plants in Bengaluru, India.

## Build/Run Commands

- No build process required - static HTML/CSS/JS files
- Open index.html in browser for local development
- Deploy by copying all files to a web server

## Code Style Guidelines

- **JavaScript:** ES6+, 4-space indentation, semicolons, single quotes
- **Variables/Functions:** camelCase naming
- **Components:** PascalCase for class names
- **Error Handling:** Use try/catch for async operations
- **Logging:** Use log() function from main.js instead of console.log
- **Imports:** Load dependencies via CDN in index.html
- **Modules:** Each feature in a separate file (app.js, i18n.js, etc.)

## Architecture

- **Vue.js:** Used without build process (loaded via CDN)
- **Tailwind CSS:** For styling (also loaded via CDN)
- **Internationalization:** Via i18n.js module (English/Kannada)
- **Asset Loading:** Scripts loaded via main.js loadAsset() function
- **Error Handling:** Global error handler in main.js
- **State Management:** Vue.js reactive state in app.js

## Documentation

- Use JSDoc-style comments for function descriptions
- Each file has a brief header explaining its purpose
