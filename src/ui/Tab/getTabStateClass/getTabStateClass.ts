import { TabState } from 'ui/Tab/Tab';

export const getTabStateClass = (state: TabState) => {
  switch (state) {
    case 'active':
      return 'active';
    case 'success':
      return 'success';
    case 'error':
      return 'error';
    default:
      return 'inactive';
  }
};