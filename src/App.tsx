import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routesConfig';
import ProtectedRoute from 'shared/utils/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <Routes>
      {
        Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<ProtectedRoute>
              {element as JSX.Element}
            </ProtectedRoute>
            }
          />
        ))
      }
    </Routes>
  );
}

export default App;
