import './App.css';
import { withRouter, Switch, Route } from "react-router-dom";
import SignUp from './components/SignUp/signup';
import Login from './components/Login/login';
import Dashboard from './components/Dashboard/dashboard';
import Loan from './components/loan/loan';
import EmailConfirm from './components/confirmMail/confirmMail';
// import ReuseToaster from './components/toaster/toasts';

function App() {
  return (
    <>
    <Switch>
      <Route path='/' exact component={SignUp}/>
      <Route path='/login' component={Login}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/loan' component={Loan}/>
      <Route path='/changepass' component={EmailConfirm}/>
    </Switch>
    </>
  );
}

export default withRouter(App);
