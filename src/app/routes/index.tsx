// src/app/routes/index.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes.config";
import { ProtectedRoute } from "./ProtectedRoute";

// Layouts
import MainLayout from "@/components/layout/MainLayout";

// Pages

import LoginPage from "@/pages/LoginPage";
import HomePage from "@/pages/HomePage";
import ProductsPage from "@/pages/ProductsPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import CartPage from "@/pages/CartPage";
import CheckoutPage from "@/pages/CheckoutPage";
import OrderConfirmationPage from "@/pages/OrderConfirmationPage";
import ProfilePage from "@/pages/ProfilePage";
import FavoritesPage from "@/pages/FavoritesPage";
import OrdersPage from "@/pages/OrdersPage";
import NotFoundPage from "@/pages/NotFoundPage";

const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: ROUTES.PRODUCTS,
                element: <ProductsPage />,
            },
            {
                path: ROUTES.PRODUCT_DETAIL,
                element: <ProductDetailPage />,
            },
            {
                path: ROUTES.CART,
                element: <CartPage />,
            },
            {
                path: ROUTES.CHECKOUT,
                element: (
                    <ProtectedRoute>
                        <CheckoutPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: ROUTES.ORDER_CONFIRMATION,
                element: (
                    <ProtectedRoute>
                        <OrderConfirmationPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: ROUTES.PROFILE,
                element: (
                    <ProtectedRoute>
                        <ProfilePage />
                    </ProtectedRoute>
                ),
            },
            {
                path: ROUTES.FAVORITES,
                element: <FavoritesPage />,
            },
            {
                path: ROUTES.ORDERS,
                element: (
                    <ProtectedRoute>
                        <OrdersPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: ROUTES.LOGIN,  // 🔥 AGREGADO
                element: <LoginPage />,
            },
        ],
    },
    {
        path: ROUTES.NOT_FOUND,
        element: <NotFoundPage />,
    },
]);
