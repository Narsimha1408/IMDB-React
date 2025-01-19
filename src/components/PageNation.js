import React, { useEffect } from 'react';
import { useState, useCallback} from 'react';




const PageNation=({onPageChange})=>{
    const totalPages=15
    const maxVisiblePageCount=10
    const startingPage=1

    const [pages,setPages]=useState([])
    const [activePage,setActivePage]=useState(1)
   
    const getPages = useCallback((totalPages, maxVisiblePageCount, activePage)=>{
        const maxResultSize = totalPages > maxVisiblePageCount ? maxVisiblePageCount : totalPages
        const startingPage = activePage + maxResultSize > totalPages ? totalPages - maxResultSize +1  : activePage
        return [...Array(maxResultSize)].map((_,idx)=>{
            return Number(startingPage)+idx
        }) //crating the empty undeffined array of sizze maxResultSize
    }, [])

    const onPageClick=useCallback((e)=>{
        let pageNumberClicked
        if(e.target.dataset.id === "Previous"){
            pageNumberClicked = activePage - 1
        }
        else if(e.target.dataset.id === "Next"){
            pageNumberClicked = activePage + 1
        }
        else{
            pageNumberClicked=Number(e.target.dataset.id);
        }
        
        setActivePage(pageNumberClicked)
        onPageChange(pageNumberClicked)
    },[activePage])

    useEffect(()=>{
        const newPages=getPages(totalPages, maxVisiblePageCount, activePage)
        setPages(newPages)
    },[activePage])
    
    return(
        <div className="pagination">
            <button data-id="Previous" disabled={activePage == 1} className="page-button" onClick={onPageClick}>Prev</button>
            {
                pages.map((page)=>(
                   
                    <div data-id={page} className={`page-button ${activePage == page ? 'active' : ''}`} onClick={onPageClick}>{page}</div>
                    
                ))
            }
            <button data-id="Next" disabled={activePage == totalPages} className="page-button" onClick={onPageClick}>Next</button>
           
        </div>

    )

}

export default PageNation;

// const startPage=Number(pageNumberClicked)
        // const noOfPages=Number(totalPages)
        // const pageLimit=10
        // if((noOfPages - pageNumberClicked + 1) >= pageLimit){
        //     const newPageList=[]
        //     for(let i=startPage;i<(startPage+pageLimit);i++){
        //         newPageList.push(i)
        //     }
        //     setPages([newPageList])
        // }
        // else{
        //     const newPageList=[]
        //     for(let i=noOfPages;i>(noOfPages-pageLimit);i--){
        //         newPageList.push(i)
        //     }
        //     setPages([newPageList])
        // }