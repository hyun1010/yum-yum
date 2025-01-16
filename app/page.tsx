import { getData } from '@/src/shared/utils/api';
import { Map } from '@/src/widgets';

export default async function Home() {
  const { data } = await getData('/api/area');

  return (
    <div>
      {data.map((item: any) => (
        <div key={item.id}>{item.name}</div>
      ))}
      <Map />
    </div>
  );
}
