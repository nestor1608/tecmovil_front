import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-extrabold text-primary-600">404</h1>
          <h2 className="mt-6 text-3xl font-bold text-secondary-900">¡Página no encontrada!</h2>
          <p className="mt-2 text-secondary-600">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
          <Link 
            to="/"
            className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
          >
            <Home className="mr-2 h-5 w-5" />
            Volver al inicio
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="flex items-center justify-center px-5 py-3 border border-secondary-300 text-base font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Volver atrás
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;