import ApplicationForm from './ApplicationForm';
export type { FormProps as ApplicationFormProps } from './ApplicationForm.types';
export default ApplicationForm;

export const ApplicationForm_Query = `
  _type == "ApplicationForm" => {
    _type,
  },
`;