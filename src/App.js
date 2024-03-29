import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import JoinPage from './components/JoinPage';
import VideoPage from './components/VideoPage';

const router = createBrowserRouter([
  {
    path:"/",
    element:<JoinPage/>
  },
  {
    path:"/room/:id",
    element:<VideoPage/>
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
