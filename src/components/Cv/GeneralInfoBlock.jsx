import ContactItem from "./ContactItem";
import Icons from "./Icons";
import { CvBlock, CvCell } from "./Cv";
import { FORM_BLOCKS, DUMMY } from '../../config/cvForm';

export default function GeneralInfoBlock({ data }) {
  const firstName = !data.firstName ? DUMMY.firstName : data.firstName;
  const lastName = !data.lastName ? DUMMY.lastName : data.lastName;
  const linkedIn = !data.linkedIn ? DUMMY.linkedIn : data.linkedIn;
  const website = !data.website ? DUMMY.website : data.website;

  return (
    <CvBlock blockName={FORM_BLOCKS.GENERAL}>
      <CvCell className="name-role">
        <h2>{`${firstName} ${lastName}`}</h2>
        <h3>{!data.role ? DUMMY.role : data.role}</h3>
      </CvCell>

      <CvCell className="photo">
        <img src="/photo.webp" alt="Photo of a candidate" />
      </CvCell>

      <CvCell className="cell-title">
        <p>Contact Details</p>
      </CvCell>

      <CvCell className="contact-info">
        <ul>
          <ContactItem icon={Icons.Location}>
            {!data.city ? DUMMY.city : data.city}
          </ContactItem>
          <ContactItem icon={Icons.Phone}>
            {!data.phone ? DUMMY.phone : data.phone}
          </ContactItem>
          <ContactItem icon={Icons.Email}>
            {!data.email ? DUMMY.email : data.email}
          </ContactItem>
        </ul>
      </CvCell>
      <CvCell className="contact-info r-edge">
        <ul>
          <ContactItem icon={Icons.LinkedIn} href={linkedIn}>
            {linkedIn}
          </ContactItem>
          <ContactItem icon={Icons.Website} href={website}>
            {website}
          </ContactItem>
        </ul>
      </CvCell>

      <CvCell className="summary">
        <p className="title">Professional summary</p>
        <p>{!data.summary ? DUMMY.summary : data.summary}</p>
      </CvCell>
    </CvBlock>
  );
}
