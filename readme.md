# Online Auction Platform

Welcome to the Online Auction Platform! This project is built using the MERN stack (MongoDB, Express.js, React, Node.js) and provides a modern and dynamic online auction experience.

## Features

- **User Authentication**: Secure user registration and login.
- **Real-time Bidding**: Participate in live auctions with real-time bidding.
- **Secure Payments**: Experience safe and secure transactions.
- **User-friendly Interface**: Easily navigate and interact with the platform.
- **Dark and Light Theme**: Switch between dark and light themes.


## Project Structure
```bash
/online-auction-platform
├── /backend
│   ├── /config
│   │   └── db.js
│   ├── /controllers
│   │   ├── authController.js
│   │   ├── bidController.js
│   │   ├── productController.js
│   │   └── userController.js
│   ├── /models
│   │   ├── Bid.js
│   │   ├── Product.js
│   │   └── User.js
│   ├── /routes
│   │   ├── authRoutes.js
│   │   ├── bidRoutes.js
│   │   ├── productRoutes.js
│   │   └── userRoutes.js
│   ├── /middleware
│   │   └── authMiddleware.js
│   ├── /utils
│   │   └── payment.js
│   ├── server.js
│   └── package.json
├── /frontend
│   ├── /public
│   ├── /src
│   │   ├── /components
│   │   │   ├── Footer.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── SignUp.jsx
│   │   │   └── TopNavBar.jsx
│   │   ├── /pages
│   │   │   └── App.jsx
│   │   ├── /context
│   │   │   └── ThemeContext.js
│   │   ├── /hooks
│   │   │   └── useFetch.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── package.json
└── README.md
```



## Installation

**1. Clone the repository:**
   ```bash
   git clone https://github.com/your-username/online-auction-platform.git
   cd online-auction-platform
```

**2. Set up the backend:**
    ```bash
    cd backend
    npm install
```


**3. Create a .env file in the backend directory with the following content:**
    ```bash
    MONGO_URI=your_mongo_db_uri
    JWT_SECRET=your_jwt_secret
```
**4. Set up the frontend:**
    ```bash
    cd ../frontend
    npm install
```


##**Usage**

Navigate to http://localhost:3000 to access the application.

Register a new account or log in with an existing account.

Participate in auctions, place bids, and manage your account.


