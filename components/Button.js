// import Button from "https://framer.com/m/Button-v2hH.js@rYlmgq5P8chVTWz7pDIy";

export function Button({ children, label, click, variant, iconLeft }) {
  return (
    <button onClick={click} className={`button ${variant}`}>
      {iconLeft}
      {label}
    </button>
  );
}
