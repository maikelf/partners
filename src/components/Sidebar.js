import {Sform} from './Sform';

export const SideBar = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
   
  return (
    <div className={sidebarClass}>
        <Sform />
    </div>
  );
};