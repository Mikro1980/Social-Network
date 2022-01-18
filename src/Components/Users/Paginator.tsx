import React, {useState} from "react";
import classes from "./Users.module.css";

export const Paginator = (props:any)=>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) //Math.ceil округляет в большую сторону// const addedPage = (num: number) => {
    let initialPages: Array<number> = []
    for (let i = props.currentPage; i <= props.currentPage + 9; i++) {
        initialPages.push(i)
    }
    const [pages, setPages] = useState(initialPages)

    const nextPages = (arr: any) => {
        setPages(arr.map((el: number) => el + 1))
    }
    const prevPages = (arr: any) => {

        setPages(arr.map((el: number) => el - 1))
    }
    return (<div>
        {pages[9] - 10 > 0 &&
        <span onClick={() => prevPages(pages)}>&larr;</span>}
        {pages.map(el => {
            return <span key={Math.random()}
                         onClick={(e) => {
                             props.onPageChanged(el)
                         }}
                         className={props.currentPage === el ? classes.selectedPage : classes.pageNum}>
                        {el}</span>
        })}
        <span onClick={() => nextPages(pages)}>&rarr;</span>
    </div>)
}
