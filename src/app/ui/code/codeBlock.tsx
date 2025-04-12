'use client';

import { useEffect, useState, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-go';
import 'prismjs/themes/prism.css';
import { CodeBlockProps } from './types';

const getCodeSample = async (language: string) => {
  switch (language) {
    case 'go':
      const { goSample } = await import('@/app/data-structures/stacks/code/go');
      return goSample;
    case 'typescript':
      const { typescriptSample } = await import('@/app/data-structures/stacks/code/typescript');
      return typescriptSample;
  }
};

export default function CodeBlock({ selectedLanguage }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);
  const [codeSample, setCodeSample] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadCodeSample = async () => {
      setIsLoading(true);
      try {
        const sample = await getCodeSample(selectedLanguage);
        setCodeSample(sample!);
        
      } catch (error) {
        console.error(`Failed to load ${selectedLanguage} sample:`, error);
        setCodeSample('// Code sample failed to load');
      } finally {
        setIsLoading(false);
      }
    };

    loadCodeSample();
  }, [selectedLanguage]);

  useEffect(() => {
    if (codeRef.current && !isLoading) {
      Prism.highlightElement(codeRef.current);
    }
  }, [codeSample, isLoading]);

  return (
    <div className="py-5">
      <pre className={`language-${selectedLanguage}`} suppressHydrationWarning>
        <code ref={codeRef} suppressHydrationWarning>
          {codeSample}
        </code>
      </pre>
    </div>
  );
}