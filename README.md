Med Detect — Post-Surgical Brain Tumor Detection

Med Detect is a web-based interface developed for uploading, previewing, and analyzing post-surgical brain MRI scans. The goal of this project is to build a clean, responsive, and medical-grade frontend that can later be integrated with a machine learning model for tumor detection.

Project Description

This project contains the complete frontend structure for the Med Detect system.
It includes an image upload section, a real-time preview feature, and a structured layout suitable for medical imaging workflows.

The interface is created using HTML, CSS, and JavaScript, along with Google Fonts to maintain a modern and professional look. The design is responsive and adapts well across different screen sizes.

Code Details and Structure
Google Fonts

The fonts Poppins and Inter are used to create a clean and minimal typography style that fits well with medical-interface design.

Layout

The UI contains:

A header with the project title and subtitle

A main container for uploading and previewing MRI images

A preview box that displays the selected MRI scan

A file input section

Space reserved for prediction results or additional features

Image Preview Logic

The image preview is handled using JavaScript’s FileReader().
Once an image is selected, it is converted to Base64 format and displayed instantly within the preview container, without reloading the page.

Responsiveness

The CSS is designed to scale smoothly across various screen sizes.
The main card, preview area, upload section, and text elements all adjust fluidly for mobile, tablet, and desktop views.

Visual Theme

A soft and clean theme is used, featuring white, grey, and blue tones. Rounded corners and subtle shadows give the interface a modern and professional appearance aligned with typical medical dashboards.

Project Folder Structure
Med-Detect/
│── index.html

│── styles/

│     └── style.css

│── scripts/

│     └── app.js

│── assets/

│     ├── icons/

│     └── images/

└── README.md

Features

MRI scan upload functionality

Real-time image preview

Minimal and intuitive interface

Fully responsive layout

Structured for integration with backend ML models

Installation and Setup

The project does not require any external dependencies.
It runs directly in any modern web browser.

Steps followed during setup:

Clone or download the project

Open the index.html file in a browser

The interface loads and functions immediately

During development, VS Code with the Live Server extension was used for faster UI updates.

Usage

Open the main page

Select the "Upload MRI Scan" option

Choose an MRI image from the system

The preview appears instantly in the designated container

This completes the frontend flow for MRI visualization.
