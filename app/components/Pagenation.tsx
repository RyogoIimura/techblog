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
    <div className='flex justify-between items-center mx-2'>
      <a>Prev</a>
      {visiblePages.map((num, index) => (
        <div key={index} className=''>
          <a href={`/?page=${num}`} className="w-14 h-14 text-center flex items-center justify-center bg-white rounded-full border-2  border-black">{num}</a>
        </div>
      ))}
          <a href="">Next</a>
    </div>
  );
};
