# Shareme

------------------------------
**** Installing Sanity.io ****
------------------------------

Move on backend folder to instal sanity.io

- In the terminal:
* cd shareme_backend

- Installing sanity globally
* npm install -g @sanity/cli

-Initialize Sanity
* sanity init

* Log on sanity.io
* choose proyect to use. In this case 'Create new project'
* set the project name. In this case 'shareme_jsm'
* Use default dataset configuration
* Use default output path 'enter'
* In this case, use the 'Clean project with no predefined schemas'
* In this case, use TypeScript
* In this case, use package manager dependecies 'npm'

**** Executing Sanity ****

Move on backend folder where sanity is installed

* Sanity start

**** Creating schema ****

* The schemas are created on '.../shceme_backend/schemas/'
  with next structure:

  ```
  export default {
    name: '--',
    title: '--',
    type: '--',
    fields: [
        {
            name: '--',
            title: '--',
            type: '--'
        },
        ...
    ]
}
  ```

* Import our schema on '.../shceme_backend/schemas/'

---------------------------------
**** Installing Tailwind CSS ****
---------------------------------

- Install Tailwind and React with Tailwin documentation
* On https://tailwindcss.com/
  -> Get Started
  -> Seatch: 'Install Tailwind CSS with Create'

- Move to frontend folder

(All this steps on tailwind documentation page)
-----------------------------------------------
-Installing react
* npx create-react-app ./

-Installing tailwind css
* npm install -D tailwindcss
* npx tailwindcss init

-Reeplace 'shareme_frontend/tailwind.config.js' by:
```
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        320: '320px',
      },
      width: {
        190: '190px',
        275: '275px',
        300: '300px',
        340: '340px',
        350: '350px',
        656: '656px',
        880: '880px',
        508: '508px',
      },
      height: {
        80: '80px',
        340: '340px',
        370: '370px',
        420: '420px',
        510: '510px',
        600: '600px',
        685: '685px',
        800: '800px',
        '90vh': '90vh',
      },
      flex: {
        0.7: '0.7 1 0%',
      },
      maxHeight: {
        370: '370px',
      },
      minWidth: {
        210: '210px',
        350: '350px',
        620: '620px',
      },
      textColor: {
        lightGray: '#F1EFEE',
        primary: '#FAFAFA',
        secColor: '#efefef',
        navColor: '#BEBEBE',
      },
      backgroundColor: {
        mainColor: '#FBF8F9',
        secondaryColor: '#F0F0F0',
        blackOverlay: 'rgba(0, 0 ,0 ,0.7)',
      },
      keyframes: {
        'slide-in': {
          '0%': {
            '-webkit-transform': 'translateX(-200px)',
            transform: 'translateX(-200px)',
          },
          '100%': {
            '-webkit-transform': 'translateX(0px)',
            transform: 'translateX(0px)',
          },
        },

        'slide-fwd': {
          '0%': {
            '-webkit-transform': 'translateZ(0px)',
            transform: 'translateZ(0px)',
          },
          '100%': {
            '-webkit-transform': 'translateZ(160px)',
            transform: 'translateZ(160px)',
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out',
        'slide-fwd': ' slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      transitionProperty: {
        height: 'height',
      },
    },
    cursor: {
      'zoom-in': 'zoom-in',
      pointer: 'pointer',
    },
  },
  variants: {
    // backgroundColor: ['active'],
    extend: {},
  },
  plugins: [],
};
```

- Delete 'shareme_frontend/src' folder because it has a lot of inecessary files and we'll create ourselves the necessary files
* Create 'src' folder
* Create 'index.js' file

- On 'shareme_frontend/src/index.js' add:
* import React from 'react'
* import ReactDOM from 'react-dom'
* import App from './App'
* import './index.css'
* ReactDOM.render(<App />, document.getElementById('root'))

- On 'shareme_frontend/src' create 'App.js'
- On 'shareme_frontend/src/App.js' add:

```
import React from 'react'
const App = () => {
  return (
    <div>
      Hello World
    </div>
  )
}

export default App
```

- On 'shareme_frontend/src' create 'index.css'
- From Tailwind documentation, add to 'shareme_frontend/src/index.css' next:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Install necessary dependencies 
* npm intall
  @sanity/client @sanity/image-url     --To connect with sanity backend
  react-google-login                   --Google Auth
  react-icons
  react-loader-spinner
  react-masonry-css                    --Allow us to create a image grid, all one next another
  react-router-dom
  uuid                                 --Allow us to create unique identifiers


- npm start
-----------------------------------------------