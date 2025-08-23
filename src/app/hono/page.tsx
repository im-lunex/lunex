import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">
        Why I Picked Hono Over Express for My APIs
      </h1>
      <p className="mb-6 text-sm sm:text-base">
        I switched from Express to Hono for building APIs—and it changed everything. Here's why <strong>Hono's speed, simplicity, and TypeScript-first approach</strong> won me over.
      </p>
      <section className="space-y-6 sm:space-y-8 text-sm sm:text-base leading-relaxed">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">What is Hono?</h2>
          <p>
            Hono is a <strong>lightweight, fast web framework</strong> tailored for modern edge platforms like Cloudflare Workers, Vercel, and Bun. It offers <strong>simple syntax</strong> and native <strong>TypeScript support</strong>.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Why I Moved Away from Express</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Heavier setup:</strong> Express felt too bloated for small APIs.</li>
            <li><strong>Middleware complexity:</strong> Managing and chaining middleware became messy.</li>
            <li><strong>TypeScript overhead:</strong> Getting types to work well took too much configuration.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Why Hono Works Better for Me</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Faster performance:</strong> Especially on edge runtimes.</li>
            <li><strong>Minimalistic syntax:</strong> Straightforward and readable.</li>
            <li><strong>TypeScript-first design:</strong> Built-in types for routes and contexts.</li>
            <li><strong>Small bundle size:</strong> Great for microservices and serverless.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Code Comparison</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-sm mb-2">Express Example</h3>
              <SyntaxHighlighter language="javascript" style={oneDark} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                {`const express = require('express')
const app = express
app.get('/', (req, res) => {
res.send('Hello from Express!')
})
app.listen(3000)`}
              </SyntaxHighlighter>
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-2">Hono Example</h3>
              <SyntaxHighlighter language="javascript" style={oneDark} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                {`import { Hono } from 'hono'
const app = new Hono()
app.get('/', (c) => c.text('Hello from Hono!'))
export default app`}
              </SyntaxHighlighter>
            </div>
          </div >
        </div >
        <div>
          <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
          <p>
            Hono has proven to be a <strong>leaner, more developer-friendly</strong> choice for building APIs in modern JavaScript environments. If you're using TypeScript and care about performance, <strong>it's worth checking out</strong>.
          </p>
        </div>
      </section >
    </div >
  );
}
