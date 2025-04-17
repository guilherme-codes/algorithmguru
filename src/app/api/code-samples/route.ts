import path from "path";
import fs from "fs";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const category = searchParams.get("category");
  const type = searchParams.get("type");

  if (!category || !type) {
    return new Response(JSON.stringify({ error: "Invalid parameters" }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  } 

  try {
    const samplesPath = path.join(process.cwd(), 'src', 'app', category, type, 'code');
    const languages = fs.readdirSync(samplesPath).map((file) => {
      const { name, ext } = path.parse(file);
      return { name, ext: ext.slice(1) };
    });

    const response = {
      category,
      type,
      languages
    }

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
