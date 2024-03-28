import styles from "./Search.module.scss";

import svgSearch from "../../../img/img_ChildArena/2-main/search-svgrepo-com.svg";
import svgClose from "../../../img/img_ChildArena/2-main/close-circle-svgrepo-com.svg";
import { useCallback, useContext, useRef, useState } from "react";
import { SearchContext } from "../../../pages/CafeChildArena/CafeChildArena";
import { debounce } from "lodash";

export default function Search() {
    const { setSearchValue } = useContext(SearchContext);
    const [value, setValue] = useState();
    const inputRef = useRef();

    const onClickClear = () => {
        setSearchValue("");
        setValue("");
        inputRef.current.focus();
    };

    const updateSearchValue = useCallback(
        debounce((str) => {
            setSearchValue(str);
        }, 1000),
        []
    );

    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    };

    return (
        <div className={styles.container}>
            <img className={styles.imgSearch} src={svgSearch} />
            <input
                value={value}
                onChange={onChangeInput}
                className={styles.root}
                placeholder="В поисках пиццы"
            />
            {value && (
                <img
                    ref={inputRef}
                    className={styles.imgClose}
                    src={svgClose}
                    onClick={onClickClear}
                />
            )}
        </div>
    );
}
