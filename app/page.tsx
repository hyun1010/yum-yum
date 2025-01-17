import HomePage from '@/src/pages/HomePage';
import { getData } from '@/src/shared/utils/api';

export default async function Home() {
  const { data } = await getData('/api/area');

  return <HomePage />;
}
