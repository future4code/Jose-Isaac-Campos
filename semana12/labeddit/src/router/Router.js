import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

import FeedPage from '../pages/FeedPage'
import LoginPage from '../pages/LoginPage'
import PostDetails from '../pages/PostDetails'

export default function Router() {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <FeedPage />
            </Route>

            <Route exact path="/login">
                <LoginPage />
            </Route>

            <Route exact path="/post/details/:id">
                <PostDetails />
            </Route>
        </Switch>
    </BrowserRouter>
}