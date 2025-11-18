export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-5xl w-full">
        <h1 className="text-6xl font-bold text-center mb-8">
          AutoGenesis AI Platform
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Autonomous AI orchestration and automation for the future
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-3">AI Agents</h2>
            <p>Deploy and manage autonomous AI agents at scale</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-3">Automation</h2>
            <p>Zero-touch deployment and self-healing systems</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-3">Analytics</h2>
            <p>Real-time monitoring and performance optimization</p>
          </div>
        </div>
      </div>
    </main>
  )
}
