export default async function getCodeSamples(category: string, type: string) {
  const languages = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/code-samples?category=${category}&type=${type}`);
  const data = await languages.json();

  return data;
}