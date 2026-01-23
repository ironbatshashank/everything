import { useState } from 'react';
import { Server, Database, Film } from 'lucide-react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LandingPage from './components/LandingPage';
import Portfolio from './components/Portfolio';
import Login from './components/Login';
import ProtectedPage from './components/ProtectedPage';

type Page = 'landing' | 'portfolio' | 'llm' | 'nas' | 'netflix' | 'login';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [intendedPage, setIntendedPage] = useState<Page>('landing');
  const { isAuthenticated, loading } = useAuth();

  const handleNavigate = (page: Page) => {
    if (page === 'portfolio' || page === 'landing') {
      setCurrentPage(page);
    } else {
      if (isAuthenticated) {
        setCurrentPage(page);
      } else {
        setIntendedPage(page);
        setCurrentPage('login');
      }
    }
  };

  const handleLoginSuccess = () => {
    setCurrentPage(intendedPage);
  };

  const handleBack = () => {
    setCurrentPage('landing');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="font-light">Loading...</p>
      </div>
    );
  }

  switch (currentPage) {
    case 'landing':
      return <LandingPage onNavigate={handleNavigate} />;
    case 'portfolio':
      return <Portfolio onBack={handleBack} />;
    case 'login':
      return <Login onBack={handleBack} onSuccess={handleLoginSuccess} />;
    case 'llm':
      return (
        <ProtectedPage
          title="LLM"
          description="Access AI language models and intelligent assistance"
          icon={Server}
          onBack={handleBack}
        />
      );
    case 'nas':
      return (
        <ProtectedPage
          title="NAS Storage"
          description="Access your network attached storage"
          icon={Database}
          onBack={handleBack}
        />
      );
    case 'netflix':
      return (
        <ProtectedPage
          title="Netflix"
          description="Stream your favorite movies and shows"
          icon={Film}
          onBack={handleBack}
        />
      );
    default:
      return <LandingPage onNavigate={handleNavigate} />;
  }
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
