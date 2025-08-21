import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">
        Why I Switched to Neovim & NvChad for Web Development
      </h1>
      <p className="mb-6">
        I moved from VSCode to Neovim—specifically <strong>NvChad</strong>—and it completely changed my workflow. Here's why this <strong>lightweight, customizable, and keyboard-centric setup</strong> makes so much sense for modern devs.
      </p>
      <section className="space-y-8 text-base leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">What is Neovim?</h2>
          <p>
            Neovim is a modern take on Vim with better extensibility, Lua-powered plugins, and async support. It's <strong>fast, minimal, and hackable</strong>.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Why NvChad?</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Pre-configured:</strong> Comes with sensible defaults and plugins.</li>
            <li><strong>Beautiful UI:</strong> Built-in themes, statuslines, and dashboards.</li>
            <li><strong>Extensible:</strong> Easily add plugins via `lazy.nvim`.</li>
            <li><strong>Blazing fast:</strong> Zero bloat and fully keyboard-driven.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Sample Config Addition</h2>
          <p className="mb-2">
            Here's how I added auto-pairs and comment toggling to my setup:
          </p>
          <SyntaxHighlighter
            language="lua"
            style={oneDark}
            customStyle={{ borderRadius: '0.5rem', fontSize: '0.875rem' }}
          >
            {`-- plugins.lua
{
  "windwp/nvim-autopairs",
  config = function()
    require("nvim-autopairs").setup {}
  end,
},
{
  "numToStr/Comment.nvim",
  config = function()
    require("Comment").setup()
  end,
}`}
          </SyntaxHighlighter>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">My Favorite Features</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Floating terminal:</strong> Quick shell without leaving the editor.</li>
            <li><strong>File tree:</strong> NerdTree-like view via NeoTree.</li>
            <li><strong>Fuzzy finding:</strong> Built-in Telescope for blazing-fast nav.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
          <p>
            If you want a <strong>speedy, distraction-free coding experience</strong> and you love customization, Neovim + NvChad is worth the switch. You'll code faster and enjoy it more.
          </p>
        </div>
      </section>
    </div>
  );
}
