import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import siteData from "@/lib/siteData.json";

export default function Page() {
  const { title, subtitle, sections } = siteData.neovim;

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="mb-6" dangerouslySetInnerHTML={{ __html: subtitle }} />
      <section className="space-y-8 text-base leading-relaxed">
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            {section.content && (
              <p
                className="mb-2"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            )}
            {section.list && (
              <ul className="list-disc list-inside space-y-1">
                {section.list.map((item, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            )}
            {section.code && (
              <SyntaxHighlighter
                language={section.code.language}
                style={oneDark}
                customStyle={{
                  borderRadius: "0.5rem",
                  fontSize: "0.875rem",
                }}
              >
                {section.code.snippet}
              </SyntaxHighlighter>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
