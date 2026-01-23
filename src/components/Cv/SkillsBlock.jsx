import { CvBlock, CvCell } from './Cv';
import { FORM_BLOCKS, DUMMY } from '../../config/cvForm';

export default function SkillsBlock({ skills, touchedFields }) {
  let s = !skills ? DUMMY.skills : skills;
  if (!skills && touchedFields.skills) s = '';

  return (
    <CvBlock blockName={FORM_BLOCKS.SKILLS}>
      <CvCell className="cell-title">
        <p>{FORM_BLOCKS.SKILLS}</p>
      </CvCell>

      <CvCell className="skills-block">
        <p>{s}</p>
      </CvCell>
    </CvBlock>
  );
}
