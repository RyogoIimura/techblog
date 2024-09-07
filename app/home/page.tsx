// app/home/page.tsx
import { Suspense } from 'react';
import { Container } from '../components/Container/Container';
import Header from "../components/Header";
import SearchComponent from './SearchComponent';
import PostListComponent from './PostList';

export default function Page() {
  return (
    <>
      <Header page='Home' />
      <Container style={{ paddingTop: "100px" }}>
        <main className='p-4'>
          <Suspense fallback={<div>Loading search...</div>}>
            <SearchComponent />
          </Suspense>
          <Suspense fallback={<div>Loading posts...</div>}>
            <PostListComponent />
          </Suspense>
        </main>
      </Container>
    </>
  );
}