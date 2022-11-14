import { TypographySize } from '../Typography';

export const getSize = (size: TypographySize) => {
  switch (size) {
    case 'xs':
      return 'sizeXs';
    case 's':
      return 'sizeS';
    case 'm':
      return 'sizeM';
    case 'l':
      return 'sizeL';
    case 'xl':
      return 'sizeXl';
    default:
      return 'sizeM';
  }
};