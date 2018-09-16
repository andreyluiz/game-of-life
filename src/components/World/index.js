import { withHandlers } from 'recompose';
import World from './component';

const EnhancedWorld = withHandlers({
  toggleCell: ({ onToggleCell }) => onToggleCell
})(World);

export default EnhancedWorld;
