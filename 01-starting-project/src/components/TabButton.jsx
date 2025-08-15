export default function TabButton({children, isSelected, onSelect}) {

    return (
        <li>
            <button className={isSelected ? "active" : ""} onClick={() => onSelect(children)}>
                {children}
            </button>
        </li>
    )
}