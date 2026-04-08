import { Link } from 'react-router-dom';
import { ROUTES } from '@shared/config/routes';

const NotFoundPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-bold text-gray-400 select-none">404</h1>

      <h2 className="text-2xl font-semibold text-gray-800 mt-4">Page not found</h2>

      <p className="text-gray-500 mt-2 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to={ROUTES.projects}
        className="mt-6 inline-flex items-center px-6 py-3 rounded-sm bg-blue-800 text-white font-medium shadow hover:bg-blue-500 transition"
      >
        Go to projects
      </Link>
    </div>
  );
};

export default NotFoundPage;
