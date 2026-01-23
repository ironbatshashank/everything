import { ArrowLeft, LogOut, LucideIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedPageProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onBack: () => void;
  children?: React.ReactNode;
}

export default function ProtectedPage({ title, description, icon: Icon, onBack, children }: ProtectedPageProps) {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    onBack();
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-light">Back</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-light">Logout</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 border border-white/20 mb-6">
            <Icon className="w-10 h-10 text-white/80" />
          </div>
          <h1 className="text-5xl font-light mb-4 tracking-tight">{title}</h1>
          <p className="text-xl text-white/50 font-light">{description}</p>
        </div>

        {children || (
          <div className="max-w-2xl mx-auto">
            <div className="border border-white/20 p-12 text-center">
              <p className="text-white/60 font-light">
                This service will be configured with your own infrastructure.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
