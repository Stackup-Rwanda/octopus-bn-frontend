import React, { Component, Profiler } from 'react';
import { BrowserRouter as Router, Switch, Route, IndexRoute } from 'react-router-dom';
import Login from '../views/Login.View';
import Signup from '../views/SignupPage';
import Confirm from '../views/ConfirmEmail';
import SocialLogin from '../helpers/SocialLogin';
import Lost from '../views/Lost.View';
import DashboardRoot from '../views/Dashboard';
import Requests from '../views/Dashboard/Requests';
import Profile from '../components/Profile';
import ProfileSettings from '../components/ProfileSettings';
import UserRoles from '../views/Dashboard/UserRoles';
import PasswordResetEmail from '../views/PasswordResetEmail';
import ResetPassword from '../views/ResetPassword';
import Message from '../views/Message';
import addAccommodation from '../views/Dashboard/addAccommodationPage';
import Home from '../components/Home';
import addRooms from '../views/Dashboard/CreateRooms';
import TravelAdminRoute from './travelAdminRoutes';
import SuperAdminRoute from './superAdminRoutes';
import AvailRequests from '../views/Dashboard/AvailRequests';
import RequesterRoute from './requesterRoute';
import NewTripRequestView from '../views/Dashboard/NewTripRequest';


export default class index extends Component {
	render() {
		return (
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/Message" exact component={Message} />
				<Route path="/signup" exact component={Signup} />
				<Route path="/verify-email" exact component={Confirm} />
				<Route path="/social-login" exact component={SocialLogin} />
				<Route path="/profile" exact component={Profile} />
				<Route path="/password-reset-email" exact component={PasswordResetEmail} />
				<Route path="/reset-password/:token" exact component={ResetPassword} />
				<DashboardRoot>
					<Route
						component={({ match }) => (
							<div>
								<Route path="/dashboard" exact component={Home} />
								<Route path="/requests" exact component={Requests} />
								<Route path="/profile-settings" exact component={ProfileSettings} />
								<SuperAdminRoute path="/user-roles" exact component={UserRoles} />
								<TravelAdminRoute path="/add-accommodation" exact component={addAccommodation} />
								<TravelAdminRoute path="/add-rooms" exact component={addRooms} />
                				<RequesterRoute path="/new-trip-request" exact component={NewTripRequestView} />
								<Route path="/avail-requests" exact component={AvailRequests} />
							</div>
						)}
					/>
				</DashboardRoot>
				<Route component={Lost} />
			</Switch>
		);
	}
}
