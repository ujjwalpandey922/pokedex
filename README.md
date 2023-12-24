# Pokedex App

A Pokedex web application built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Redux. The app features infinite scroll, interactive cards, modals, real-time search, and filter functionality.

## Project Architecture

The project follows a modular structure for better maintainability and scalability. Here's a brief overview of the project's architecture:

- **components/**: Contains React components used throughout the application.
- **pages/**: Defines Next.js pages for routing.
- **redux/**: Houses Redux-related files, including actions, reducers, and slices.
- **styles/**: Stores global and component-specific styles using Tailwind CSS.
- **public/**: Holds static assets such as images and icons.
- **utils/**: Includes utility functions or helper files.

## Prerequisites

Before running the application, ensure you have the following dependencies installed:

- Node.js
- npm or yarn

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ````
   
2. Install Dependences:
  ``` terminal
    npm i  
  ````

3. Run Server:
  ```terminal   
    npm run dev
  ``` 
## Features
Infinite Scroll: Dynamically loads more Pokemon as you scroll down the page.
Interactive Cards: Click on a Pokemon card to view detailed information in a modal.
Modals: Detailed modal view for each Pokemon with additional information.
Real-Time Search: Search for Pokemon by name or ID in real-time.
Filter Functionality: Filter Pokemon based on their types.

## Technologies Used
Next.js: React framework for building web applications.
TypeScript: Adds static typing to JavaScript for improved development experience.
Tailwind CSS: Utility-first CSS framework for styling.
Framer Motion: Adds animations and transitions to React components.
Redux: State management library for predictable state containers.

