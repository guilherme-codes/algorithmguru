'use client';

import { useEffect, useState, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-go';
import 'prismjs/themes/prism.css';
import { CodeBlockProps } from './types';
import { getCodeSample } from '@/app/utils/get-code';

export default function CodeBlock({ selectedLanguage, samples }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);
  const [codeSample, setCodeSample] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadCodeSample = async () => {
      setIsLoading(true);
      try {
        const sample = await getCodeSample(selectedLanguage, samples);
        setCodeSample(sample!);
      } catch (error) {
        console.error(`Failed to load ${selectedLanguage} sample:`, error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCodeSample();
  }, [selectedLanguage, samples]);

  useEffect(() => {
    if (codeRef.current && !isLoading) {
      Prism.highlightElement(codeRef.current);
    }
  }, [codeSample, isLoading]);

  return (
    <div className="py-5">
      <pre suppressHydrationWarning>
        <code
          ref={codeRef}
          className={`language-${selectedLanguage}`}
          suppressHydrationWarning
        >
          {codeSample}
        </code>
      </pre>
    </div>
  );
}
