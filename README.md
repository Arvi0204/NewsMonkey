# NewsMonkey

A simple news application built using React and Bootstrap that fetches and displays the latest news from various categories. The app uses a development news API to retrieve news articles. It supports multiple categories such as General, Business, Entertainment, Health, Science, Sports, and Technology.

## Features

- **Modern UI**: A sleek, dark-themed interface with **Glassmorphism** effects.
- **Multiple Categories**: Displays news from different categories like General, Business, Entertainment etc.
- **Responsive UI**: Built with Bootstrap and custom CSS, ensuring a premium experience on all devices.
- **Real-Time News**: Fetches the latest news using a development news API.
- **Optimized Performance**: Replaced legacy loading GIFs with lightweight CSS-only spinners.

## Tech Stack

- **Frontend**: React (Vite)
- **Styling**: Bootstrap 5 + Custom CSS (Glassmorphism, Dark Mode)
- **Fonts**: Poppins (Headings), Inter (Body)
- **API**: Development news API (Paid when deployed)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Arvi0204/React02_newsmonkey.git
   ```

2. Navigate to the project directory:

   ```bash
   cd React02_newsmonkey
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the application locally:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000` in your browser.

## API Integration

This app integrates with a development news API to fetch the latest news articles. Please note that the API is paid when deployed. You will need an API key to access the news data.

To use the API:

1. Sign up for an API key from the news provider.
2. Add your API key in the `.env` file (or wherever the API key is required in the app).

## Deployment

To deploy the app, you can use services like Netlify, Vercel, or any other platform of your choice.

1. Make sure to add your environment variables (API key) before deploying.
2. Follow the deployment instructions of your chosen platform to deploy the app.
