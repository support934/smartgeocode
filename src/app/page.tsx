export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center leading-tight">
        Ex-Amazon L6 Builds Production Backends<br/>in a Weekend – $5,000 flat
      </h1>
      <p className="text-xl md:text-2xl mb-12 text-center max-w-3xl opacity-90">
        Next.js 16 + Clerk + Drizzle + Stripe-ready • Deployed on Railway • Live API proof below
      </p>

      <div className="bg-gray-900 p-10 rounded-xl mb-12 border border-gray-800 max-w-4xl">
        <p className="text-green-400 font-mono mb-6 text-lg">Live API proof – try it right now:</p>
        <code className="block bg-black p-6 rounded-lg text-sm md:text-base overflow-x-auto whitespace-pre">
          curl https://smartgeocode.io/api/geocode?address=Delhi \
            -H "x-api-key: sk_test_2025"
        </code>
      </div>

      <a 
        href="https://calendly.com/sumeetvasu/weekend-backend" 
        
        className="bg-purple-600 hover:bg-purple-500 px-16 py-8 text-3xl rounded-xl font-bold transition-all transform hover:scale-105 shadow-2xl"
      >
        Book 15-min call → I’ll show you exactly what ships in 48 hours
      </a>

      <p className="mt-12 text-gray-400 text-lg text-center max-w-2xl">
          I only take clients I know I can crush it for.<br />
          If it’s not a perfect fit on the call, no hard feelings – zero pressure
      </p>
    </main>
  );
}