import { TypographyWeight } from '../Typography';

export const getWeight = (weight: TypographyWeight) => {
  switch (weight) {
    case 'semiBold':
      return 'semiBold';
    default:
      return 'regular';
  }
};