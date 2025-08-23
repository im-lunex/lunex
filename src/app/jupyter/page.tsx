export default function Page() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">Building My First Hono Project – A Hotel Booking API</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Project Overview</h2>
          <p>
            As a passionate learner and aspiring full-stack developer, I challenged myself to build a hotel booking API using
            <strong>Hono</strong>, a blazing-fast web framework for the modern web. This project, which I’ve named
            <strong>Jupyter</strong>, is more than just a learning experiment—it's the beginning of a journey to master backend
            architecture and API development.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">What Does It Do?</h2>
          <p>
            The idea is to create a simple yet scalable <strong>hotel booking API</strong>, where users can:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Create user accounts</strong></li>
            <li><strong>Add and manage hotels</strong> (currently under development)</li>
            <li><strong>Book rooms</strong> and manage stays (coming soon)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
          <p>
            I chose a modern and efficient stack to keep things fast and developer-friendly:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Hono</strong> – Minimalist and lightning-fast web framework</li>
            <li><strong>Drizzle ORM</strong> – Type-safe and schema-first ORM</li>
            <li><strong>Neon</strong> – Serverless PostgreSQL for fast and scalable queries</li>
          </ul>
          <p className="mt-2">
            This stack helps me maintain a balance of <strong>performance</strong> and <strong>scalability</strong> while learning best practices.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">What’s in Progress?</h2>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Hotel creation & management</strong></li>
            <li><strong>Authentication & sessions</strong></li>
            <li><strong>Validation and error handling</strong></li>
            <li><strong>Robust testing</strong></li>
          </ul>
          <p className="mt-2">
            The goal is to <strong>complete the core features by June 2025</strong> and turn this into a clean, production-ready API.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">What I’ve Learned So Far</h2>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Routing and middleware</strong> with Hono</li>
            <li><strong>Database modeling</strong> with Drizzle</li>
            <li><strong>Serverless PostgreSQL</strong> deployment via Neon</li>
            <li><strong>API endpoint structure</strong> and RESTful principles</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">What’s Next?</h2>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Booking system</strong> implementation</li>
            <li><strong>Frontend integration</strong> (possibly with Next.js or Astro)</li>
            <li><strong>Deployment with CI/CD</strong></li>
          </ul>
        </section>

        <div className="bg-muted p-4 rounded mt-8">
          <p><strong>💬 This project is still under development.</strong> More features and updates are on the way!</p>
        </div>
      </div>
    </>
  )
}
