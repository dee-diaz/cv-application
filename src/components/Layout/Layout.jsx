import './Layout.css';

export default function Layout({ as: Component = "div", className, children }) {
  return (
    <Component className={className}>
      {children}
    </Component>
  );
}