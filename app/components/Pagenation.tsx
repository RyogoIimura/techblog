import { FC, useEffect, useState } from 'react';


type Props = {
  currentPage: number;
  totalPage: number;
  handleClick: (pageNumber: number) => void;
  limit: number;
  count: number;
  path:string
}



export const Pagenation: FC<Props> = ({totalPage,handleClick,currentPage})=> {
  const pageNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [visiblePages, setVisiblePages] = useState(pageNum);

  useEffect(() => {
    const updatePages = () => {
      if (window.innerWidth <= 500) {
        setVisiblePages(Array.from({ length: Math.min(3, totalPage) }, (_, i) => i + 1));
      } else if (window.innerWidth <= 768) {
        setVisiblePages(Array.from({ length: Math.min(5, totalPage) }, (_, i) => i + 1));
      } else {
        setVisiblePages(Array.from({ length: totalPage }, (_, i) => i + 1));
      }
    };

    updatePages();
    window.addEventListener('resize', updatePages);
    return () => window.removeEventListener('resize', updatePages);
  }, [totalPage]);



  return (
    <div className='flex justify-between items-center mx-2'>
      {/* <a onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>Prev</a> */}
      <ul>
        <li>テスト</li>
      </ul>

      {visiblePages.map((num, index) => (
        <button key={index} className=''>
          <a href={`/?page=${num}`} className="w-14 h-14 text-center flex items-center justify-center bg-white rounded-full border-2  border-black">{num}</a>
        </button>
      ))}
      {/* <a onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPage}>Next</a> */}



    </div>
  );
};
