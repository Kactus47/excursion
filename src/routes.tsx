import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./Components/Layouts/MainLayout";
import { PageNotFound } from "./Pages/PageNotFound/PageNotFound";
import { MainPage } from "./Pages/MainPage/MainPage";
import { FaqPage } from "./Pages/FaqPage/FaqPage";
import { BlogPage } from "./Pages/BlogPage/BlogPage";
import { ExcursionsPage } from "./Pages/ExcursionPage/ExcursionPage";
import { InsideExcursionPage } from "./Pages/ExcursionPage/InsideExcursionPage/InsideExcursionPage";
import { ReviewsPage } from "./Pages/ReviewsPage/ReviewsPage";
import { InsideBlogPage } from "./Pages/BlogPage/InsideBlogPage/InsideBlogPage";

export const routers = createBrowserRouter([
  { 
    path: "/", 
    element: <MainLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/faq',
        element: <FaqPage />
      },
      {
        path: '/blog',
        element: <BlogPage />,
      },
      {
        path: '/blog/:id',
        element: <InsideBlogPage />,
      },
      {
        path: '/excursions',
        element: <ExcursionsPage />
      },
      {
        path: '/excursions/:id',
        element: <InsideExcursionPage />
      },
      {
        path: '/reviews',
        element: <ReviewsPage />
      },
      {
        path: '*',
        element: <PageNotFound />
      },
    ]
  },
]);