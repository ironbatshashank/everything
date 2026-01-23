import { useState } from 'react';
import { ArrowLeft, Lock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface LoginProps {
  onBack: () => void;
  onSuccess: () => void;
}

export default function Login({ onBack, onSuccess }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const success = await login(username, password);

    if (success) {
      onSuccess();
    } else {
      setError('Invalid credentials');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
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
          </div>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 border border-white/20 mb-6">
              <Lock className="w-8 h-8 text-white/80" />
            </div>
            <h1 className="text-4xl font-light mb-3 tracking-tight">Login</h1>
            <p className="text-white/50 font-light">Enter your credentials to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-light text-white/70 mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 focus:border-white/40 focus:outline-none transition-colors font-light"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-light text-white/70 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 focus:border-white/40 focus:outline-none transition-colors font-light"
                required
              />
            </div>

            {error && (
              <div className="p-3 border border-red-500/50 bg-red-500/10 text-red-200 text-sm font-light">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-white text-black hover:bg-white/90 transition-colors font-light disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
