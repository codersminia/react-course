import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom';
import MainLayout from './layouts/mainlayout';
import Homepage from './pages/homepage';
import JobsPage from './pages/jobspage';
import NotFoundPage from './pages/notfoundpage';
import JobPage from './pages/jobpage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<Homepage/>}/>
      <Route path='jobs' element={<JobsPage/>}/>
      <Route path='jobs/:id' element={<JobPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;