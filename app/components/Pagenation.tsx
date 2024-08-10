import { useEffect, useState } from 'react';

export const Pagenation = () => {
  const pageNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [visiblePages, setVisiblePages] = useState(pageNum);

  useEffect(() => {
    const updatePages = () => {
      if (window.innerWidth <= 500) {
        setVisiblePages(pageNum.slice(0, 3));
      } else if (window.innerWidth <= 768) {
        setVisiblePages(pageNum.slice(0, 5));
      } else {
        setVisiblePages(pageNum);
      }
    };

    updatePages();

    window.addEventListener('resize', updatePages);

    return () => window.removeEventListener('resize', updatePages);
  }, []);

  return (
    <div className='flex justify-between mx-2'>
      <a>Prev</a>
      {visiblePages.map((num, index) => (
        <div key={index} className='size-10  w-10 h-10'>
          <a href={`/?page=${num}`} className="text-center p-2 bg-white rounded-full border-2  border-black block">{num}</a>
        </div>
      ))}
          <a href="">Next</a>
    </div>
  );
};
