# Reddit Client App (WIP)

A custom **Reddit client application** that allows users to browse, search, and filter Reddit posts across multiple subreddits with customizable sorting options. Built with **React** and **TypeScript**, this app leverages the **Reddit API** to provide a seamless browsing experience with real-time data.

## 🚧 Project Status: Work in Progress

This application is actively under development. Core features are being implemented incrementally, and the design and functionality are subject to change as the project progresses.

## 📋 Features (Planned)

- **Search and Filter**: Search for posts within specific subreddits or across Reddit. Filter by post type, subreddit, or date.
- **Multi-Subreddit Browsing**: Browse multiple subreddits in a single view, combining content from various communities.
- **Sorting Options**: Customizable sorting options for posts (e.g., top, hot, new, and controversial).
- **Post Details**: View detailed information for each post, including comments and author details.
- **Responsive Design**: Optimized for various screen sizes.

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript
- **API**: Reddit API for real-time content
- **Styling**: Tailwind CSS (or alternative)
- **State Management**: React Context or Redux (to be finalized)

## 🚀 Getting Started

### Prerequisites

- **Node.js** and **npm** (or **Yarn**).
- **Reddit API Credentials**: You will need to register an app on Reddit to obtain your client ID, client secret, and OAuth credentials.

### Installation
1. Clone the repository:
```
git clone https://github.com/yourusername/reddit-client-app.git
cd reddit-client-app
```

2. Install dependencies:
```
npm install
# or
yarn install
```

3. Set up environment variables in a `.env` file with your Reddit API credentials:
```
REACT_APP_REDDIT_CLIENT_ID=your_client_id
REACT_APP_REDDIT_SECRET=your_client_secret
REACT_APP_REDDIT_USERNAME=your_reddit_username
REACT_APP_REDDIT_PASSWORD=your_reddit_password
```

4. Start the development server:
```
npm run dev
# or
yarn dev
```

## 🔧 Current Functionality

- **User Authentication**: OAuth2 authentication with Reddit.
- **Trending Posts**: Initial setup to retrieve trending or "hot" posts.
- **Search**: Basic search functionality across Reddit.

## 🗂 Directory Structure

```
src/
├── components/        # Reusable UI components
├── hooks/             # Custom React hooks
├── pages/             # Main pages and routes
├── services/          # API calls and service functions
├── types/             # TypeScript type definitions
├── App.tsx            # Main app component
└── index.tsx          # Entry point
```

## 📌 To-Do

- Implement multi-subreddit browsing.
- Add more sorting and filtering options.
- Implement detailed post view with comments.
- Optimize state management.
- Improve error handling and loading states.

## 📄 License

This project is licensed under the MIT License.

## 💬 Contributing

Contributions, bug reports, and feature requests are welcome! Please fork the repository and submit a pull request or open an issue for discussion.

Thank you for exploring this project! Check back soon for updates as we continue to build out features and polish the user experience.
