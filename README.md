Med Detect — Post-Surgical Brain Tumor Detection

Med Detect is a web-based interface designed to help visualize, upload, and analyze post-surgical brain MRI scans for detecting tumor recurrence.
The interface provides a clean, modern UI built using HTML, CSS, and JavaScript, and can be integrated with backend ML models or Flask APIs for prediction.

🔍 Overview

This project provides:

A responsive frontend for uploading MRI images

A preview container to display the selected scan

UI components for titles, subtitles, and usage info

A clean dark-theme layout suitable for AI/medical applications

Compatibility with Flask or other backend servers

📁 Project Structure
Med-Detect/
│── index.html

│── styles/
│     └── style.css

│── scripts/
│     └── app.js

│── assets/
│     └── icons, fonts, images

└── README.md

⚙️ Technologies Used

HTML5

CSS3 (custom styling + Google Fonts)

JavaScript (image preview, frontend logic)

Flask / FastAPI backend for model prediction

🚀 Features

Upload MRI images directly from your system

Real-time image preview

Simple and intuitive UI

Expandable for ML integration

Fully responsive layout

📦 Installation & Setup

Clone the repository

git clone https://github.com/yourusername/med-detect.git
cd med-detect


Open the project locally

Just open the index.html file in any browser.

OR

Use Live Server in VS Code:

Right click → "Open with Live Server"

▶️ Usage

Open the homepage

Click Upload MRI Scan

Select a post-surgical MRI image

The preview will appear instantly

📌 Notes

This project currently provides UI only.

Machine learning logic must be connected separately.

Ensure MRI images are in supported formats (PNG/JPG).

