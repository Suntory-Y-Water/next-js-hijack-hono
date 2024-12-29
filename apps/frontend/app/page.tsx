export const dynamic = 'force-dynamic';

import { client } from './lib/client';

export default async function Home() {
  const response = await client.hello.$get();
  const data = await response.json();

  const message = await client.message[':message']
    .$get({
      param: { message: 'こんにちは、世界' },
    })
    .then(async (res) => res.json());
  return (
    <div>
      <h1>Hello World!</h1>
      <p>apiから受け取ったデータは{data.message}です。</p>
      <p>入力したデータは{message.message}です。</p>
    </div>
  );
}
