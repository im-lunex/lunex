import Link from "next/link";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Page() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">Building a Blazingly Fast CLI Task Manager - with Rust</h1>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Project Overview</h2>
          <p>
            As a passionate developer exploring systems programming, I built a comprehensive command-line task manager using
            <strong> Rust</strong>. This project, called <strong>Todo CLI</strong>, demonstrates the power of Rust's memory safety
            and performance guarantees while providing a practical tool for daily productivity. It's designed to be blazingly fast,
            secure, and user-friendly with zero bloat and maximum efficiency.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">What Does It Do?</h2>
          <p>
            Todo CLI is a feature-rich task management system that helps users stay organized and productive:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Multi-user support</strong> with secure login/logout system</li>
            <li><strong>Task management</strong> - Add, view, delete, and update tasks</li>
            <li><strong>Status tracking</strong> - Mark tasks as done or pending</li>
            <li><strong>Search functionality</strong> - Find tasks by content</li>
            <li><strong>Productivity insights</strong> - View statistics and completion rates</li>
            <li><strong>Automatic timestamping</strong> - Track when tasks were created</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Tech Stack & Features</h2>
          <p>
            Built with modern Rust practices and focusing on performance and safety:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Rust</strong> – Memory safe systems programming with zero-cost abstractions</li>
            <li><strong>Chrono</strong> – Robust date and time handling</li>
            <li><strong>File-based storage</strong> – Encrypted user data with isolation</li>
            <li><strong>Cross-platform</strong> – Works on Windows, macOS, and Linux</li>
          </ul>
          <p className="mt-2">
            The application starts in under <strong>100ms</strong> with only <strong>~2MB memory usage</strong>, showcasing Rust's efficiency.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Key Features Implemented</h2>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Secure user authentication</strong> with data isolation</li>
            <li><strong>Interactive CLI interface</strong> with intuitive commands</li>
            <li><strong>Task statistics dashboard</strong> showing completion rates</li>
            <li><strong>Real-time status indicators</strong> (⏳ pending, ✅ done)</li>
            <li><strong>Comprehensive error handling</strong> and input validation</li>
            <li><strong>Beautiful formatting</strong> with colored output</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">What I've Learned</h2>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Rust ownership model</strong> and memory management</li>
            <li><strong>Error handling</strong> with Result and Option types</li>
            <li><strong>File I/O operations</strong> and data persistence</li>
            <li><strong>CLI design patterns</strong> and user experience</li>
            <li><strong>Security principles</strong> for user data protection</li>
            <li><strong>Cross-platform development</strong> considerations</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Future Roadmap</h2>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Task categories and tags</strong> for better organization</li>
            <li><strong>Due dates and reminders</strong> system</li>
            <li><strong>Export functionality</strong> to JSON/CSV formats</li>
            <li><strong>Web interface option</strong> for broader accessibility</li>
            <li><strong>Cloud synchronization</strong> capabilities</li>
            <li><strong>Advanced analytics</strong> and productivity insights</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Installation & Usage</h2>
          <p>Get started quickly with cargo:</p>
          <SyntaxHighlighter language="bash" style={oneDark} customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}>
            {`# Install from GitHub
cargo install --git https://github.com/im-lunex/todo-cli.git

# Or clone and build locally
git clone https://github.com/im-lunex/todo-cli.git
cd todo-cli
cargo run`}
          </SyntaxHighlighter>
        </section>
        <div className="bg-muted p-4 rounded mt-8">
          <p><strong>💡 Built to learn Rust and create something useful.</strong> View the source code on
            <Link href="https://github.com/im-lunex/todo-cli" className="underline ml-1"> GitHub</Link>!</p>
        </div>
      </div>
    </>
  )
}
