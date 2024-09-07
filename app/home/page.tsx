// app/home/page.tsx
import { Suspense } from 'react';
import { Container } from '../components/Container/Container';
import SearchComponent from './SearchComponent';
import PostList from './PostList';

export default function HomePage() {
  return (
    <Container>
      <main className="p-4">
        <Suspense fallback={<div>Loading search...</div>}>
          <SearchComponent />
        </Suspense>
        <Suspense fallback={<div>Loading posts...</div>}>
          <PostList />
        </Suspense>
      </main>
    </Container>
  );
}