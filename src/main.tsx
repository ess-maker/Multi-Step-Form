import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import "./main.scss";
import Form from './components/Form';
import Personalinfo from './components/Personalinfo';
import Plan from './components/Plan';
import Add from './components/Add';
import Summery from './components/Summery';
import { Provider } from 'react-redux';
import store from './form/store';
import Tanks from './components/Tanks';


createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Form />} >
      <Route index element = {<Personalinfo />}/>
      </Route>
  )
)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />,
    children: [
      {
        path: "/",
        element: <Personalinfo />,
      },
      {
        path: "plan",
        element: <Plan />,
      },
      {
        path: "add",
        element: <Add />,
      },
       {
        path: "summery",
        element:<Summery />,
      },
      {
        path: "thanks",
        element:<Tanks />,
      },
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
