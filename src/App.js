import { Router } from 'react-router-dom';
import './App.css';
import { createBrowserHistory } from 'history'
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './Pages/HomePages/HomeMenu/Home';
import Contact from './Pages/ContactPages/Contact'
import New from './Pages/News/New'
import Register from './Pages/RegisterPages/Register'
import Login from './Pages/LoginPages/Login'
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Detail from './Pages/Detail/Detail';
import CheckOut from './Pages/Checkout/CheckOut';
import CheckOutTemplate from './templates/CheckOutTemplate/CheckOutTemplate';
import { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import BookingConfirmedDetails from './Components/Modal/BookingConfirmedDetails';
import Loading from './Components/Loading/Loading'
import Profile from './Pages/Profile/Profile';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Film from './Pages/Admin/Film';
import DashBoard from './Pages/Admin/Dashboard';
import Users from './Pages/Admin/Users';
import ShowTime from './Pages/Admin/ShowTime';
import AddNewFilms from './Pages/Admin/AddNewFilms';
import EditFilm from './Pages/Admin/EditFilm'
import DeleteFilmAsking from './Components/Modal/DeleteFilmAsking';
import AddNewUser from './Pages/Admin/AddNewUser';
import EditUser from './Pages/Admin/EditUser';
const CheckOutTemplateLazy = lazy(() => import('./templates/CheckOutTemplate/CheckOutTemplate'))
export const history = createBrowserHistory()

function App() {
  return <div className=''>
    <BookingConfirmedDetails></BookingConfirmedDetails>
    <Loading></Loading>
    <Router history={history}>
      <Switch>
        <HomeTemplate path='/home' exact Component={Home}></HomeTemplate>
        <HomeTemplate path='/contact' exact Component={Contact}></HomeTemplate>
        <HomeTemplate path='/new' exact Component={New}></HomeTemplate>
        <HomeTemplate path='/detail/:id' exact Component={Detail}></HomeTemplate>
        <UserTemplate exact path='/register' Component={Register}></UserTemplate>
        <UserTemplate exact path='/login' Component={Login}></UserTemplate>
        <HomeTemplate exact path='/profile' Component={Profile}></HomeTemplate>

        <CheckOutTemplate path='/checkout/:id' exact Component={CheckOut} />
        <Suspense fallback='loading'>
          <AdminTemplate path='/admin' exact Component={DashBoard}></AdminTemplate>
          <AdminTemplate path='/admin/film' exact Component={Film}></AdminTemplate>
          <AdminTemplate path='/admin/film/addnew' exact Component={AddNewFilms}></AdminTemplate>
          <AdminTemplate path='/admin/film/edit/:id' exact Component={EditFilm}></AdminTemplate>
          <AdminTemplate path='/admin/film/showtimes/:id' exact Component={ShowTime}></AdminTemplate>

          <AdminTemplate path='/admin/users' exact Component={Users}></AdminTemplate>
          <AdminTemplate path='/admin/addnewuser' exact Component={AddNewUser}></AdminTemplate>
          <AdminTemplate path='/admin/users/:id' exact Component={EditUser}></AdminTemplate>

          {/* <AdminTemplate path='/admin/showtimes' exact Component={ShowTime}></AdminTemplate> */}
          <HomeTemplate path='/' exact Component={Home}></HomeTemplate>
        </Suspense>
      </Switch>
    </Router>
  </div>


    ;
}

export default App;
