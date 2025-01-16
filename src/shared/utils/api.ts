export async function getData(url: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/${url}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
