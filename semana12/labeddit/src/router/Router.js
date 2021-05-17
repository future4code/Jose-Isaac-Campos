import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import FeedPage from '../pages/FeedPage'
import LoginPage from '../pages/LoginPage'
import PostDetailsPage from '../pages/PostDetailsPage'
import SignupPage from "../pages/SignupPage";

export default function Router() {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <FeedPage />
            </Route>

            <Route exact path="/login">
                <LoginPage />
            </Route>

            <Route exact path="/signup">
                <SignupPage />
            </Route>

            <Route exact path="/post/details/:id">
                <PostDetailsPage />
            </Route>
        </Switch>
    </BrowserRouter>
}