'use client';

import { useEffect, useState, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-go';
import 'prismjs/themes/prism.css';
import { typescriptSample } from '../../data-structures/stacks/code/typescript';
import { CodeBlockProps } from './types';


export default function CodeBlock({ selectedLanguage }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Delay Prism initialization to avoid hydration issues
      if (codeRef.current) {
        Prism.highlightElement(codeRef.current);
      }
  }, []);

  return (
    <>
      <div className="py-5">
        <pre className={`language-${selectedLanguage}`} suppressHydrationWarning>
          <code ref={codeRef} suppressHydrationWarning>
            {typescriptSample}
          </code>
        </pre>
      </div>
    </>
  );
}