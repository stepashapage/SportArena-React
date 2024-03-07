import styles from "./Search.module.scss";

import svgSearch from "../../../img/img_ChildArena/2-main/search-svgrepo-com.svg";
import svgClose from "../../../img/img_ChildArena/2-main/close-circle-svgrepo-com.svg";
import { useContext } from "react";
import { SearchContext } from "../../../pages/CafeChildArena/CafeChildArena";

export default function Search() {
    const { SearchValue, setSearchValue } = useContext(SearchContext);
    return (
        <div className={styles.container}>
            <img className={styles.imgSearch} src={svgSearch} />
            <input
                value={SearchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
                className={styles.root}
                placeholder="В поисках пиццы"
            />
            {SearchValue && (
                <img
                    className={styles.imgClose}
                    src={svgClose}
                    onClick={() => {
                        setSearchValue("");
                    }}
                />
            )}
        </div>
    );
}
