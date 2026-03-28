import './Layout.css';

interface LayoutProps {
  as?: React.ElementType;
  className: string;
  id?: string;
  children: React.ReactNode;
}

export default function Layout({ as: Component = "div", className, id, children }: LayoutProps) {
  return (
    <Component id={id} className={className}>
      {children}
    </Component>
  );
}