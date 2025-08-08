import { AppLayout } from '@/layout';
import { PluginWrapper } from '@/plugins';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <PluginWrapper>
        <AppLayout />
      </PluginWrapper>
    </ErrorBoundary>
  );
}

export default App;
