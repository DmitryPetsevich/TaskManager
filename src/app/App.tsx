import { RouterProvider } from 'react-router-dom';
import { QueryProvider } from '@app/providers/QueryProvider';
import { router } from '@app/router/router';
import { DialogProvider } from '@shared/ui/dialog/DialogProvider';

function App() {
  return (
    <QueryProvider>
      <DialogProvider>
        <RouterProvider router={router} />
      </DialogProvider>
    </QueryProvider>
  );
}

export default App;
