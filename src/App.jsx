import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootIndex from "./pages/root/RootIndex";
import HomeIndex from "./pages/home/HomeIndex";


const routerValue = createBrowserRouter(
createRoutesFromElements(
  <>
    <Route element={<RootIndex/>}>
      <Route path='/' element={<HomeIndex/>}></Route>
    </Route>
  </>
)
);

function App() {

  return (
    <>
    <RouterProvider router={routerValue} /> 
    </>
  )
}

export default App