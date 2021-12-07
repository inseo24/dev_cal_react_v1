import './modal.css';
import { SModalButton, SModalMain } from './styles';

export const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <SModalMain>
        {children}
        <SModalButton type="button" onClick={handleClose}>
          X
        </SModalButton>
      </SModalMain>
    </div>
  );
};
