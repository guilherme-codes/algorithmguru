import { Samples } from "../ui/code/types";

export const getCodeSample = async (language: string, codeSamples: Samples) => {
  const path = `@/app/${codeSamples.category}/${codeSamples.type}/code/${language}`;
  const code = await import(path);

  return code.default;
};
