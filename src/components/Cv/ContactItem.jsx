export default function ContactItem({ icon: Icon, children, href }) {
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
