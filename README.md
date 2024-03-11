# Getting Started with Youtube App

## Project configurations

### Create typescript based project

> npx create-react-app youtube --template typescript

### Configure Test cases

- The inbuild test script will runs all the test files that are kept inside the `src`

  > npm test

- If we want to put all the test files outside of src then we have to configure `jest` in the project

### Configure Tailwind CSS

- Path -> https://tailwindcss.com/ > Get Started > Documentation > Framework Guides > Create React App

  > npm install -D tailwindcss
  > npx tailwindcss init

- The init command will generate tailwind.config.js. Edit the below content

  ```
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  ```

- Add tailwind in the root css file - index.css

  ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  ```
