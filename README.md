# Lifecycle Events on React

## -The Lifecycle function for render

> Render : componentWillMount( ) -> render( ) -> componentDidMount( )

## -The Lifecycle function for update

> Update : componentWillReceiveProps( ) -> shouldComponentUpdate( ) -> componentWillUpdate( ) -> render( ) -> componentDidUpdate( )

### It's able to make infinite scroll with using state.

# How to build Project

yarn build  
The project was built assuming it is hosted at the server root.
You can control this with the homepage field in your package.json.
For example, add this to build it for GitHub Pages:

"homepage" : "http://myname.github.io/myapp",

yarn add --dev gh-pages

Add the following script in your package.json.

    // ...
    "scripts": {
      // ...
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }

Then run:

yarn run deploy
