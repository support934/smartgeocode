export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-24">
      <h1 className="text-5xl md:text-7xl font-bold text-center leading-tight">
        I Ship Production Next.js Backends<br />in One Weekend – $5,000 Flat
      </h1>
      
      <p className="mt-8 text-xl md:text-2xl text-gray-300 text-center max-w-4xl">
        The exact stack I used to build SmartGeocode.io (live right now):<br />
        <span className="font-semibold text-white">Next.js 16 + Clerk Auth + Drizzle ORM + Stripe Billing + Railway Deploy</span>
      </p>

      <div className="mt-16 bg-gray-900 p-8 rounded-xl border border-gray-800 max-w-3xl w-full">
        <p className="text-green-400 font-semibold mb-4">Live API proof – try it right now:</p>
        <code className="block bg-black p-6 rounded-lg text-sm md:text-base overflow-x-auto">
          curl https://smartgeocode.io/api/geocode?address=Delhi \<br />
          -H "x-api-key: sk_test_2025"
        </code>
      </div>

      <a
        href="https://calendly.com/smartgeocode-support/new-meeting"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-16 inline-block px-16 py-8 text-2xl font-bold bg-purple-600 hover:bg-purple-500 rounded-xl shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all"
      >
        Book 15-min Call → See Exactly What Ships in 48 Hours
      </a>

      <p className="mt-12 text-xl text-gray-400 text-center max-w-2xl">
        I only take 2–3 clients per month who I know I can 100% crush it for.<br />
        If it&apos;s not a perfect fit on the call – no hard feelings, zero pressure.
      </p>
    </div>
  );
}