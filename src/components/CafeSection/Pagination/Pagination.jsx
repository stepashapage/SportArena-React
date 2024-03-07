import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

export default function Pagination({ onChangePage }) {
    return (
        <>
            <ReactPaginate
                className={styles.root}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(e) => onChangePage(e.selected + 1)}
                pageRangeDisplayed={8}
                pageCount={4}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </>
    );
}
