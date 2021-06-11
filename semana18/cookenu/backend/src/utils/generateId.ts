import { v4, validate } from 'uuid';

export const generateId = () => {
  return v4();
};

export const validateFormatId = (id: string): boolean => {
  return validate(id);
};
