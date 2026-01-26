import ContactItem from './ContactItem';
import Icons from './Icons';
import { CvBlock, CvCell } from './Cv';
import { FORM_BLOCKS, DUMMY } from '../../config/cvForm';
import { normalizeUrl } from '../../utilities/utils';

export default function GeneralInfoBlock({ data, touchedFields }) {
  let fields = {
    firstName: !data.firstName ? DUMMY.firstName : data.firstName,
    lastName: !data.lastName ? DUMMY.lastName : data.lastName,
    role: !data.role ? DUMMY.role : data.role,
    city: !data.city ? DUMMY.city : data.city,
    phone: !data.phone ? DUMMY.phone : data.phone,
    email: !data.email ? DUMMY.email : data.email,
    linkedIn: !data.linkedIn ? DUMMY.linkedIn : data.linkedIn,
    website: !data.website ? DUMMY.website : data.website,
    summary: !data.summary ? DUMMY.summary : data.summary,
  };

  Object.keys(touchedFields).forEach((field) => {
    if (!data[field]) fields[field] = '';
  });

  return (
    <CvBlock blockName={FORM_BLOCKS.GENERAL}>
      <CvCell className="name-role">
        <h2>{`${fields.firstName} ${fields.lastName}`}</h2>
        <h3>{fields.role}</h3>
      </CvCell>

      <CvCell className="photo">
        <img src={data.photoUrl || "/photo.webp"} alt="Photo of a candidate" />
      </CvCell>

      <CvCell className="cell-title">
        <p>Contact Details</p>
      </CvCell>

      <CvCell className="contact-info">
        <ul>
          <ContactItem icon={Icons.Location}>
            {fields.city}
          </ContactItem>
          <ContactItem icon={Icons.Phone}>
            {fields.phone}
          </ContactItem>
          <ContactItem icon={Icons.Email}>
            {fields.email}
          </ContactItem>
        </ul>
      </CvCell>
      <CvCell className="contact-info r-edge">
        <ul>
          <ContactItem icon={Icons.LinkedIn} href={normalizeUrl(fields.linkedIn)}>
            {fields.linkedIn}
          </ContactItem>
          <ContactItem icon={Icons.Website} href={normalizeUrl(fields.website)}>
            {fields.website}
          </ContactItem>
        </ul>
      </CvCell>

      <CvCell className="summary">
        <p className="title">Professional summary</p>
        <p>{fields.summary}</p>
      </CvCell>
    </CvBlock>
  );
}
