import { Server, Database, Film, Briefcase } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <nav className="border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-light tracking-wide">Shashank Srivastava</h1>
          </div>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-7xl font-light mb-6 tracking-tight">
              Welcome
            </h2>
            <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
              Product Manager | Machine Learning Engineer | Data Scientist
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <button
              onClick={() => onNavigate('portfolio')}
              className="group p-8 border border-white/20 hover:border-white/40 transition-all duration-300 bg-black hover:bg-white/5"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <Briefcase className="w-12 h-12 text-white/80 group-hover:text-white transition-colors" />
                <h3 className="text-2xl font-light">Portfolio</h3>
                <p className="text-white/50 text-sm font-light">
                  View my experience and projects
                </p>
              </div>
            </button>

            <button
              onClick={() => onNavigate('llm')}
              className="group p-8 border border-white/20 hover:border-white/40 transition-all duration-300 bg-black hover:bg-white/5"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <Server className="w-12 h-12 text-white/80 group-hover:text-white transition-colors" />
                <h3 className="text-2xl font-light">LLM</h3>
                <p className="text-white/50 text-sm font-light">
                  Access AI language models
                </p>
                <span className="text-xs text-white/40 font-light">Login required</span>
              </div>
            </button>

            <button
              onClick={() => onNavigate('nas')}
              className="group p-8 border border-white/20 hover:border-white/40 transition-all duration-300 bg-black hover:bg-white/5"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <Database className="w-12 h-12 text-white/80 group-hover:text-white transition-colors" />
                <h3 className="text-2xl font-light">NAS Storage</h3>
                <p className="text-white/50 text-sm font-light">
                  Network attached storage access
                </p>
                <span className="text-xs text-white/40 font-light">Login required</span>
              </div>
            </button>

            <button
              onClick={() => onNavigate('netflix')}
              className="group p-8 border border-white/20 hover:border-white/40 transition-all duration-300 bg-black hover:bg-white/5"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <Film className="w-12 h-12 text-white/80 group-hover:text-white transition-colors" />
                <h3 className="text-2xl font-light">Netflix</h3>
                <p className="text-white/50 text-sm font-light">
                  Stream movies and shows
                </p>
                <span className="text-xs text-white/40 font-light">Login required</span>
              </div>
            </button>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white/40 text-sm font-light">
            © 2026 Shashank Srivastava. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
