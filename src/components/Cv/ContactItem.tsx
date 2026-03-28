interface ContactItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
  href?: string;
}


export default function ContactItem({ icon: Icon, children, href }: ContactItemProps) {
  const content = (
    <>
      <Icon />
      <span>{children}</span>
    </>
  );

  return (
    <li>
      {href ? (
        <a target="_blank" rel="noopener noreferrer" href={href}>
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}
