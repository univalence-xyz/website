import { Logo } from "./components/Logo";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden font-mono">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-[500px] h-[500px] top-1/4 -left-48 bg-blue-500 rounded-full mix-blend-screen filter blur-[128px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bottom-1/4 -right-48 bg-cyan-500 rounded-full mix-blend-screen filter blur-[128px] animate-pulse-slow" />
      </div>
      
      {/* Grain effect overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] pointer-events-none" />

      {/* Main content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen p-8">
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-500/20 rounded-full animate-float-slow" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-cyan-500/20 rounded-full animate-float" />
        
        {/* Central content */}
        <div className="flex flex-col items-center space-y-12">
          <Logo className="w-48 h-48 animate-float" />
          <h1 className="text-7xl md:text-9xl font-bold tracking-tight font-mono">
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent 
              [text-shadow:_0_4px_32px_rgb(59_130_246_/_30%)]">
              Univalence
            </span>
          </h1>
          
          <a 
            href="https://github.com/univalence-xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3 overflow-hidden rounded-full transition-all duration-300
              hover:shadow-[0_0_32px_0_rgba(59,130,246,0.3)] font-mono tracking-wide"
          >
            <div className="absolute inset-0 border border-blue-500/50 rounded-full group-hover:scale-[1.01] transition-transform duration-300" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full transition-opacity duration-300" />
            <span className="relative text-lg text-blue-400 group-hover:text-blue-300 transition-colors">
              explore projects
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
