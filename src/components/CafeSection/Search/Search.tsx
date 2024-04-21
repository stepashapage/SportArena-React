import styles from "./Search.module.scss";

import svgSearch from "../../../img/img_ChildArena/2-main/search-svgrepo-com.svg";
import svgClose from "../../../img/img_ChildArena/2-main/close-circle-svgrepo-com.svg";
import React, { useCallback, useRef, useState } from "react";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../../redux/slices/filterslice";

export const Search = () => {
    // const { setSearchValue } = useContext(SearchContext);
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const onClickClear = () => {
        dispatch(setSearchValue(""));
        setValue("");
        inputRef.current?.focus();
    };

    const updateSearchValue = useCallback(
        debounce((str: string) => {
            dispatch(setSearchValue(str));
        }, 1000),
        []
    );

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    };

    return (
        <div className={styles.container}>
            <img className={styles.imgSearch} src={svgSearch} />
            <input
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                className={styles.root}
                placeholder="В поисках пиццы"
            />
            {value && (
                <img
                    className={styles.imgClose}
                    src={svgClose}
                    onClick={onClickClear}
                />
            )}
        </div>
    );
};
