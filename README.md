# Inventory Management App

A modern inventory management application built with HTML, CSS, JavaScript, React, Node.js, Express, Sequelize, PostgreSQL, and Bootstrap. This project follows the MVC architecture and demonstrates a complete solution with both backend and frontend components. Axios is used for API communication.

## Features

- **Inventory Management:** CRUD operations to manage items in the inventory.
- **API Integration:** Axios is used for seamless API requests between frontend and backend.
- **Database:** PostgreSQL for storing inventory data, managed using Sequelize ORM.
- **Performance Optimized:** Designed with performance in mind, including efficient database queries and fast response times.
- **Responsive Design:** Bootstrap is used to ensure the app is fully responsive and accessible on all devices.

## Installation

To run this project locally, follow the steps below:

### Prerequisites

- Node.js
- npm or yarn
- PostgreSQL

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/inventory-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd inventory-app
   ```

3. Install the backend dependencies:

   ```bash
   cd server
   npm install
   ```

4. Install the frontend dependencies:

   ```bash
   cd ../client
   npm install
   ```

5. Set up the PostgreSQL database (make sure PostgreSQL is installed):

   - Create a new database for the app.
   - Update the database configuration in `server/config/config.json` with your PostgreSQL credentials.

6. Run the backend server:

   ```bash
   cd ../server
   npm start
   ```

7. Run the frontend development server:
   ```bash
   cd ../client
   npm start
   ```

Now, you should be able to access the app in your browser at `http://localhost:3000`.

## Contributing

Feel free to fork this project and submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
