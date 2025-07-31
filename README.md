# 🚲 FindMyBike

**FindMyBike** is a web application that allows users to browse bicycles reported as stolen in Berlin. It leverages the [Bike Index API v3](https://bikeindex.org/documentation/api_v3) to fetch and display up-to-date data on stolen bikes, including details such as brand, location, and images.

## ✨ Features

- 🔍 View a list of bikes reported as stolen in Berlin
- 📄 See detailed information for each bicycle (brand, color, stolen location, images, etc.)

## 🛠️ Built With

- **React** 19
- **React Router** 7
- **@tanstack/react-query** – for async data handling
- **Axios** – HTTP client
- **Material UI (MUI)** – UI components
- **Vite** – fast development server and bundler
- **TypeScript** – static typing
- **ESLint** – code linting

## 📦 Installation

```bash
git clone https://github.com/your-username/findmybike.git
cd findmybike
npm install
```

## 🚀 Running the App

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## 🏗️ Available Scripts

- `npm run dev` – start the development server
- `npm run build` – compile TypeScript and build the production bundle
- `npm run lint` – run ESLint on the codebase
- `npm run preview` – preview the production build locally

## 🔗 API Reference

This project uses the [Bike Index API v3](https://bikeindex.org/documentation/api_v3) to fetch stolen bike data.

## 📄 License

This project is licensed under the MIT License.
