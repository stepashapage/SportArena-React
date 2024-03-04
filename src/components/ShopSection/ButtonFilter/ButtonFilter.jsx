export const ButtonFilter = ({ children, handleClick, isActive }) => {
    const activeLink = "filter__item-link filter__item-link--Active";
    const staticLink = "filter__item-link";

    return (
        <li
            onClick={handleClick}
            className={`${isActive ? activeLink : staticLink}`}
        >
            {children}
        </li>
    );
};
