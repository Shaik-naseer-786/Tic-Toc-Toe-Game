# Tic Tac Toe Game in React

A simple Tic Tac Toe game built using React and Webpack. The game allows two players to take turns marking spaces in a 3x3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.
## Features

- Two-player game
- Displays the winner or if the game is a draw
- Reset button to start a new game
- Responsive and interactive UI

## Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tic-tac-toe-react.git
   cd tic-tac-toe-react
   ```
2.Install the dependencies:
```bash
   npm install
```

### Running the Development Server

#### Start the development server to run the project locally:
```bash
   npm start
```

Open your browser and navigate to http://localhost:port to see the application in action.

## Code Explanation
#### TicTacToe.js
The main component for the Tic Tac Toe game. Manages the game state, handles player moves, checks for winners, and displays the game status.

#### TicTacToe.css
Contains the styles for the Tic Tac Toe game.

#### circle.png and cross.png
Images used to represent the players' marks.

#### App.js
The root component that includes the Tic Tac Toe component.

#### index.js
The entry point for the React application. Renders the App component.

#### webpack.config.js
Configuration file for Webpack, handling the bundling of JavaScript and CSS files.



## Acknowledgments
**React documentation:** https://reactjs.org/docs/getting-started.html
**Webpack documentation:** https://webpack.js.org/concepts/