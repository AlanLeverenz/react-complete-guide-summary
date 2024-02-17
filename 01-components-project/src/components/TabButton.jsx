export default function TabButton({ children, isSelected, ...props }) {

  console.log("Tab Button Executing");

  // onClick prop is being passed with function attached
  return (
    <li>
      <button
        className={isSelected ? 'active' : undefined}
        {...props}>{children}
      </button>
    </li>
  );
}