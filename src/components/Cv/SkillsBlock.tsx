import { CvBlock, CvCell } from './Cv';
import { FORM_BLOCKS, DUMMY } from '../../config/cvForm';

interface SkillsBlockProps {
  skills?: string;
  touchedFields: Record<string, boolean>;
}

export default function SkillsBlock({ skills, touchedFields }: SkillsBlockProps) {
  let s: string = !skills ? DUMMY.skills : skills;
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
