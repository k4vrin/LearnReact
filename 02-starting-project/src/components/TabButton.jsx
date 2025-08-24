export default function TabButton({ children, isSelected, ...attrs }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...attrs}>
        {children}
      </button>
    </li>
  );
}
