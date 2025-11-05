import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import siteData from "@/lib/siteData.json";

interface GitCliData {
  title: string;
  sections: Section[];
  banner: string;
}

interface Section {
  title: string;
  content?: string;
  list?: string[];
  footer?: string;
  code?: {
    language: string;
    snippet: string;
  };
}

export default function Page() {
  const { title, sections, banner } = siteData[
    "git-cli" as keyof typeof siteData
  ] as GitCliData;

  return (
    <>
      <div className="max-w-3xl mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-4">{title}</h1>

        {sections.map((section: Section, index: number) => (
          <section key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            {section.content && (
              <p dangerouslySetInnerHTML={{ __html: section.content }} />
            )}
            {section.list && (
              <ul className="list-disc list-inside mt-2">
                {section.list.map((item: string, i: number) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            )}
            {section.footer && (
              <p
                className="mt-2"
                dangerouslySetInnerHTML={{ __html: section.footer }}
              />
            )}
            {section.code && (
              <SyntaxHighlighter
                language={section.code.language}
                style={nord}
                customStyle={{
                  borderRadius: "0.5rem",
                  fontSize: "0.875rem",
                }}
              >
                {section.code.snippet}
              </SyntaxHighlighter>
            )}
          </section>
        ))}

        <div className="bg-muted p-4 rounded mt-8">
          <p dangerouslySetInnerHTML={{ __html: banner }} />
        </div>
      </div>
    </>
  );
}
