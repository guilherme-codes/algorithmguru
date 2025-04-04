export default async function getLanguages(category: string, type: string) {
  const languages = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/languages?category=${category}&type=${type}`);
  const data = await languages.json();

  return data;
}