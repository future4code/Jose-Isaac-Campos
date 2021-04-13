import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import HomePage from '../pages/HomePage'
import ListTripPage from '../pages/ListTripPage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import LoginPage from '../pages/LoginPage'
import AdminHomePage from '../pages/AdminHomePage'
import CreateTripPage from '../pages/CreateTripPage'
import TripDetailsPage from '../pages/TripDetailsPage'

export default function Router() {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>

            <Route exact path="/trips/list">
                <ListTripPage />
            </Route>

            <Route exact path="/trips/application">
                <ApplicationFormPage />
            </Route>

            <Route exact path="/login">
                <LoginPage />
            </Route>

            <Route exact path="/admin/trips/list">
                <AdminHomePage />
            </Route>
            
            <Route exact path="/admin/trips/create">
                <CreateTripPage />
            </Route>

            <Route exact path="/admin/trips/:id">
                <TripDetailsPage />
            </Route>
        </Switch>
    </BrowserRouter>
}