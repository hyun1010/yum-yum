import { Card } from '../shared/ui';
import { HomeMenu } from '../widgets/home';
import { Map } from '../widgets/map';

export default function HomePage() {
  return (
    <>
      <HomeMenu />
      <Map />
      <Card title={'콘텐츠'} content={'콘텐츠1'} />
      <Card title={'콘텐츠'} content={'콘텐츠2'} />
      <Card title={'콘텐츠'} content={'콘텐츠3'} />
      <Card title={'콘텐츠'} content={'콘텐츠4'} />
    </>
  );
}
