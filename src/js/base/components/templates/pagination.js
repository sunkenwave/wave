import React from 'react';

export const Pagination = () => (
  <div className="pagination">
    <a href="#" className="pagination__prev-btn"></a>
    <a href="#" className="pagination__next-btn"></a>
    <div className="pagination__count">
      <a className="active" href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
    </div>
  </div>
);
