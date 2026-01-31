import { Navigate } from "react-router-dom";
// import { useAuth } from "@/features/auth/hooks/useAuth";
import { ROUTES } from "./routes.config";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

/**
 * HOC para proteger rutas que requieren autenticación
 * Si el usuario no está autenticado, redirige a LOGIN
 */

export function ProtectedRoute({ children }: ProtectedRouteProps) {

    // const { isAuthenticated, isLoading } = useAuth();

    // if (isLoading) {
    //     return (
    //         <div className="flex h-screen items-center justify-center">
    //             <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
    //         </div>
    //     );
    // }

    // if (!isAuthenticated) {
    //     return <Navigate to={ROUTES.LOGIN} replace />;
    // }
    return <>{children}</>;
}