# Shenouda Portfolio — Front-End Developer

A modern, high-performance personal portfolio website showcasing technical skills, featured projects, and services. Built with **React**, **Vite**, and modular CSS variables with a glassmorphic aesthetic.

## Features

- 🌓 **Dark / Light Mode**: Theme context persisted in LocalStorage.
- 📱 **100% Responsive**: Tailored for mobile, tablet, and widescreen environments.
- 🎨 **Glassmorphism UI**: High-contrast, dynamic CSS backdrop filters.
- 🔍 **Project Filtering**: Categorized project presentation (React, PWA, Dashboards, Landing Pages).
- ⚡ **Performance Focused**: Minimal dependencies for optimal Lighthouse metrics.
- ♿ **Accessible**: Semantic HTML elements, focus indicators, and ARIA labelling.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Icons**: React Icons
- **Styling**: CSS Modules & CSS Variables

## Project Folder Structure

```text
src/
├── assets/         # Dynamic image imports and resume PDF
├── components/     # Component modules (Navbar, Hero, About, Skills, etc.)
├── context/        # React Context (Theme Management)
├── data/           # Portfolio project data and personal configuration
├── styles/         # Global typography, color schemes, and Reset CSS
├── App.jsx         # Component layout configuration
└── main.jsx        # DOM rendering setup