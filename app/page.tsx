export default async function Home() {
  const result = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/area`, {
    method: 'GET',
  });

  const { data } = await result.json();

  return (
    <div>
      {data.map((item: any) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
