# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## App Structure

```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│ └── index.html # DO NOT MODIFY
└── src .
    ├── Components # container for all the developped files.
        ├── Navbar # container folder for files used in Navbar.
            ├── Navbar.jsx #
            └── Navbar.style.scss # SASS Styles.
        ├── ShipmentDetails # Container for Shipment details table.
            ├── ShipmentDetails.jsx #
            └── ShipmentDetails.style.scss # SCSS Styles.
        ├── ShipmentHeader # Container for Shipment Header table.
            ├── ShipmentHeader.jsx #
            └── ShipmentHeader.style.scss # SCSS Styles.
        ├── ShipmentProgress # Container for Shipment Progress bar.
            ├── ShipmentProgress.jsx #
            └── ShipmentProgress.style.scss # SCSS Styles.
    ├── util # container for the helpful utilities to keep components simple.
        └── useFetch.jsx # contains Async custom hook to Fetch data.
    ├── layout # Container for the Layout components.
        ├── Header # Container for Navbar/Header.
        ├──
        └──
    ├── mainStyles # Container for the main styles.
        ├── abstract
            ├── _mixins.scss
            └── _variables.scss
        ├── base
            └── _typography.scss
        ├── layout
            └── _grid.scss
        └── main.scss # Container for all the main styles files.
     ├── media # Container for the main styles.
        └── icons
            ├── arrow-down.svg
            ├── bosta_logo_ar_red.svg
            └── bosta_logo_ar_white.svg
    └── pages
        └── Trackshipment.jsx
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
