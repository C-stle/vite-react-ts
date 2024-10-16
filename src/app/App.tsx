import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<>error</>}>
        <Route path={"/"} element={<>root</>}></Route>
        <Route path={"/1"} element={<>1</>}></Route>
        <Route path={"/2"} element={<>2</>}></Route>
      </Route>,
    ),
  )

  return <RouterProvider router={router}></RouterProvider>
}

export default App