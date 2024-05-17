import { AuthPage } from "./pages/AuthPage/AuthPage"
import { FeedPage } from "./pages/FeedPage/FeedPage"
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage"

export const routes = [
    {
        path: '/auth',
        element: <AuthPage />
    },
    {
        path: '/feed/*',
        element: <FeedPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
]