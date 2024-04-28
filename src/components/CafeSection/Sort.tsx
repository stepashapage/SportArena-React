import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SortPropertyEnum, setSortId } from "../../redux/slices/filterslice";
import { RootState } from "../../redux/store";

type SortListItem = {
    name: string;
    sortProperty: SortPropertyEnum;
};

export const sortList: SortListItem[] = [
    { name: "популярности", sortProperty: SortPropertyEnum.RATING },
    { name: "цене", sortProperty: SortPropertyEnum.PRICE },
    { name: "алфавиту", sortProperty: SortPropertyEnum.TITLE },
];

type PopupElement = MouseEvent & {
    composedPath: Node[];
};

export const Sort: React.FC = memo(() => {
    const sort = useSelector((state: RootState) => state.filter.sort);
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(false);
    const sortRef = useRef<HTMLDivElement>(null);

    const onClickActiveList = useCallback((i: any) => {
        dispatch(setSortId(i));
        setIsVisible(false);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const _e = e as PopupElement;
            if (sortRef.current && !_e.composedPath.includes(sortRef.current)) {
                setIsVisible(false);
            }
        };
        document.body.addEventListener("click", handleClickOutside);

        return () => {
            document.body.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="sort" ref={sortRef}>
            <div className="sort__label">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span
                    onClick={() => {
                        setIsVisible(!isVisible);
                    }}
                >
                    {sort.name}
                </span>
            </div>
            {isVisible && (
                <div className="sort__popup">
                    <ul>
                        {sortList.map((item, i) => {
                            return (
                                <li
                                    key={i}
                                    onClick={() => {
                                        onClickActiveList(item);
                                    }}
                                    className={`${
                                        sort.sortProperty === item.sortProperty
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    {item.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
});
