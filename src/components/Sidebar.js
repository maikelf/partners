import {Sform} from './Sform';
import {Clear} from './Clear';

export const SideBar = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
   
  return (
    <div className={sidebarClass}>
        <Sform />
        <Clear />
    </div>
  );
};