import './Layout.css';

export default function Layout({ as: Component = "div", className, id, children }) {
  return (
    <Component id={id} className={className}>
      {children}
    </Component>
  );
}