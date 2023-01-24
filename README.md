# Shareme

**** Installing Sanity.io ****

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