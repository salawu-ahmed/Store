# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Steps 1: created our action objects / functions
the action function is a function that returns an action object.
An action object is an object that specifies the type of action we are trying to do and the payload.
example of an action function / creator is:
        const setProducts = (products) => {
            {
                title: "SETPRODUCTS",
                payload: products
            }
        }

Steps 2: We created our reducers 
the reducer is a function that takes a state and an action to be performed and specifies how the state should be mutated.
an example we created a productReducer.js and in this file we created: 
        1. initialState = { products: [] }
        2. created a product reducer: const productReducer = ((state = intialState, action) => {
            switch(action.type)
                case "SETPRODUCTS"
                return {...state, products:payload}
                default 
                return state
        })
The reducer takes in the current state defined above (initialState) and mutates the state based on the action type using a switch statement.
NB: Our reducers always returns a state


steps 3: we have an index.js file that is used to combine all our reducers. In this index.js file we assign the states from our our reducers into one huge state / object which then serves as the universal state / store of our application.
We created a variable called reducers which under the hood is a combination of all our states since all the reducers we will be combining retun objects/states. We then export our reducers variable which will be used in our store.js file

steps 4: the store.js file we create a store. A universal container for all our application states. We use the createStore function and passed in our reducers which we exported from the index.js file in our redux/reducers folder.

step 5: we import our store and make it available to our entire application by using the provider in the main.jsx. the provider takes a prop called store whose value we set to store. for example <Provider store = {store}> This is how the entire states of our application is made available to all component hence no more need to pass props once the state is in the store


How we accessed the state in our component.
Remember that the state of our entire application is a collection of objects.
We use the useSelector which takes the parameter called state. the state represents the entire state of our application. Hence to acces a particular state (object/value) we use the dot notation or object destructuring method.
for example: to access the state of our products / all our products in the store we do something like this:
        const products = useSelector((state) => state.allProducts.products)
Remember our initialState from our productReducer had a variable called all pro
Why allProducts?
remember reducers return an object. also when combining our reducers (creating our universal state) we name the object our productReducer returns `allProduct` 
so in our universal state we access the allProduct object and within the all product object we access the products variable which is an array of objects.


How to mutate the state on when an action is fired?
To mutate the state we use the useDispatch hook. to use the useDispatch hook we require the state and an action object. in our case we use our action creator function which return our action objects.
Once the action object is passed into our useDispatch ..... we dispatch that action in the appropriate reducer  
