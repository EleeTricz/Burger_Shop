

# Burger Shop Backend 🍔

This is the backend API for the **Burger Shop** project. It handles order validation, WhatsApp integration for order submissions, and basic routing functionality. The frontend is planned to be developed using **React**.

## Project Structure

```
Burger_Shop/
├── backend/
│   ├── scr/
│   │   ├── controllers/        # Handles the business logic
│   │   ├── middlewares/        # Contains middleware functions (e.g., validation)
│   │   ├── routers/            # Manages API routes
│   │   ├── schemas/            # Zod schemas for data validation
│   │   ├── utils/              # Utility functions
│   ├── .env.example            # Example of environment variables
│   ├── app.js                  # Application entry point
│   ├── server.js               # Server setup and initialization
├── package.json                # Project dependencies and scripts
├── package-lock.json           # Dependency lock file
├── README.md                   # Documentation (you are here)
```

## Features

- **Order Validation**: Validates incoming orders using [Zod](https://zod.dev/).
- **WhatsApp Integration**: Generates a WhatsApp link for order submission.
- **Express.js Backend**: Built with Node.js and Express.js for routing and middleware support.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/burger-shop.git
   cd burger-shop/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the `backend/` directory (use `.env.example` as a template):
     ```
     PHONE_NUMBER=your_whatsapp_number
     PORT=3000
     ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Base URL: `http://localhost:3000`

#### 1. **Submit Order**
   - **POST** `/bugerorder`
   - **Description**: Validates an order and returns a WhatsApp link for submission.
   - **Request Body**:
     ```json
     {
       "name": "John Doe",
       "address": "123 Burger Lane",
       "items": [
         { "item": "Cheeseburger", "quantity": 2 },
         { "item": "Fries", "quantity": 1 }
       ],
       "total": 15.99
     }
     ```
   - **Response**:
     ```json
     {
       "whatsappLink": "https://api.whatsapp.com/send?phone=55888993314&text=..."
     }
     ```

## Frontend Development (Coming Soon) 🚀

The front-end for the Burger Shop project will be developed using **React**. It will provide a seamless and user-friendly interface for customers to browse the menu, customize orders, and submit them directly through the backend API.

## Scripts

- **Start Development Server**:
  ```bash
  npm run dev
  ```
- **Run Production Server**:
  ```bash
  npm start
  ```

## Technologies

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building APIs.
- **Zod**: For data validation.
- **dotenv**: Loads environment variables.

## Environment Variables

| Variable       | Description                 | Example Value     |
|-----------------|-----------------------------|-------------------|
| `PHONE_NUMBER` | WhatsApp number for orders  | `55889993344`   |
| `PORT`         | Port to run the application | `3000`            |

## Contributing

Feel free to fork this repository and submit pull requests.

1. Fork the project.
2. Create a new branch:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/new-feature
   ```
5. Submit a pull request.



---
