import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({currentPage, postsPerPage, totalPosts, paginate}) => {

    const pageNumbers = [];
    const [arrayOfCurrPages, setArrayOfCurrPages] = useState([]);

    for (let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++ ){
        pageNumbers.push(i);
    }

    useEffect(() => {
      let tempCurrNumberOfPages = [...arrayOfCurrPages];

      let dotsInitial = '...';
      let dotsLeft = '..';
      let dotsRight = '....';

      if(currentPage >= 1 && currentPage <= 9){
        tempCurrNumberOfPages = [1,2,3,4,5,6,7,8,9,10, dotsInitial, pageNumbers.length]
      }
      else if(currentPage == 10){
          const sliced = pageNumbers.slice(0, 10);
          tempCurrNumberOfPages = [...sliced, dotsInitial, pageNumbers.length]
      }
      else if (currentPage > 10 && currentPage < pageNumbers.length - 2){
          const sliced1 = pageNumbers.slice(currentPage - 2, currentPage);
          const sliced2 = pageNumbers.slice(currentPage, currentPage + 10);

          tempCurrNumberOfPages = [1, dotsLeft, ...sliced1, ...sliced2, dotsRight, pageNumbers.length]
      }
      else if(currentPage > pageNumbers.length - 3){
          const sliced = pageNumbers.slice(pageNumbers.length - 4);
          tempCurrNumberOfPages = [1, dotsLeft, ...sliced]
      }

      else if(currentPage == dotsInitial){
          console.log(currentPage);
          paginate(arrayOfCurrPages[arrayOfCurrPages.length - 3] + 1);
      }
      else if(currentPage == dotsRight) {
          paginate(arrayOfCurrPages[3] + 2);
      }
      else if(currentPage == dotsLeft) {
        paginate(arrayOfCurrPages[3] - 2);
    }

      setArrayOfCurrPages(tempCurrNumberOfPages);
    
    }, [currentPage]);    

    return (
        <div className='pagination-container'>
            <Link className='pagination-container__item' onClick={() => paginate(currentPage - 1 < 0 ? 1 : currentPage - 1)} to="">{`<<`}</Link>
            {
                arrayOfCurrPages.map((item, index) => (
                    <Link key={index} className={`pagination-container__item ${item === currentPage ? 'active' : ''}`} onClick={() => paginate(item)} to="">{item}</Link>
                ))
            }
            <Link className='pagination-container__item' onClick={() => paginate(currentPage + 1 > totalPosts/postsPerPage ? 1 : currentPage + 1)} to="">{`>>`}</Link>
        </div>
    );
};

export default Pagination;
