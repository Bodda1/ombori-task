# Phygrid show case app

This is a CRA with a simple task of loading users from an API with loader more

## Description

A loader is showing for 3 seconds or until data is ready then we show users' data
as a list with scroll to load more feature

## Features

- Lazy loading
- Fetch data using an API

## Getting Started

These instructions will help you set up the project on your local machine for development and testing.

### Prerequisites

- Node.js (20.17.0)

### Tehcnologies Used

* **Redux with Redux Saga** (not needed for this case but included for scalability)
* **Styled components**: for styling
* **React router**: to handle different pages
  - the '/' routes redirects to the 'users' route showing the users page
  - the '/login' should show the login page if user not authenticated but in our case redirect to '/'
  any other route will show a 404 page

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Bodda1/ombori-task.git
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the application:
   ```bash
   npm start
   ```

## Contributing

We welcome contributions!

## License

This project is licensed under the MIT License - see the LICENSE.md for details.

## Contact

Abdallah Ibrahim - abdallah.ibrahim.91@gmail.com