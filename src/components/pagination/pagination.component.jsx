import React from 'react'

import ReactPaginate from 'react-paginate'

function Pagination({...otherProps}){
    // console.log({...otherProps})
    return (
        <div className="pagination-container">
            <ReactPaginate 
            {...otherProps}
            containerClassName="pagination pagination-md justify-content-center"
            pageClassName="page-item"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            pageLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            activeClassName="active"
            previousLabel="<"
            nextLabel=">"
            breakLabel="..."
        />
        </div>
    )
}

export default Pagination