import dynamic from 'next/dynamic';

export const ReactQueryProvider = dynamic(
  () => import('./react-query.provider'),
);
