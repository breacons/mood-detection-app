# Hi Junctioner!
This is the frontend for our safe chat application. It can be considered as two separate app:
- /dashboard Is the "internal" screen of what the computer vision sees and analyses
- /chat Is what the user would see when using a chat application that integrated our APIs and components

# How to test
If you don't have our backend running, you can check out the games and flows included in this app by visiting a couple of paths:

Different games to play:

- /chat/break?next=meditate
- /chat/break?next=rage
- /chat/break?next=youtube

Receiving a badge:
- /chat/break/badge?id=2
- /chat/break/badge?id=4

Viewing a badge collection
- /chat/break/collection

With the backend running everything should just work. To trigger some backend flows, you can push messages to different sockets that trigger the above flows as well. Check /services/socket/index.ts for more.

This PoC should give you a pretty good idea of what we have in mind. Surely there are countless things we could improve on, but we hope it gets the message across! Let us know what you think.

# Video demo
Our amazing Kristof made a beautiful demo of all of these flows and we even show our acting skills. Check it out here: [WE DONT HAVE A LINK YET]



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
