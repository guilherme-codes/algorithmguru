import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism.css';

type CodeBlockProps = {
  code: string;
  language: string;
};

export default function CodeBlock ({ code, language }: CodeBlockProps) {
  const highlightedCode = Prism.highlight(code, Prism.languages[language], language);

  return (
    <pre className={`language-${language}`}>
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </pre>
  );
};

