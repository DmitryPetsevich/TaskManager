import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

export function DefaultErrorElement() {
  const error = useRouteError();

  let message = 'Something went wrong';

  if (isRouteErrorResponse(error)) {
    message = error.statusText || message;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="flex items-center justify-center w-full h-full p-6">
      <div className="max-w-md w-full border border-red-400 bg-white shadow-sm p-6 text-center">
        <div className="mb-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-200 animate-pulse">
            <span className="text-red-600 text-xl">⚠️</span>
          </div>
        </div>

        <h2 className="text-lg font-semibold text-gray-900 mb-2">{message}</h2>

        <p className="text-sm text-gray-500 mb-6">
          An unexpected error occurred. Please try again.
        </p>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Reload
          </button>
        </div>
      </div>
    </div>
  );
}
