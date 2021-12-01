import './modal.css';
import { SButton, SModalMain } from './styles';

export const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <SModalMain>
        {children}
        <SButton type="button" onClick={handleClose}>
          X
        </SButton>
      </SModalMain>
    </div>
  );
};
