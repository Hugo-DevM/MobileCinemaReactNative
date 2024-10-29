import AppNavigation from './navigation/appNavigation';
import { FavoritesProvider } from './providers/FavoritesContext';
import "nativewind";

export default function App() {
  return (
    <FavoritesProvider>
      <AppNavigation />
    </FavoritesProvider>
  );
}
