import './modal.css';
import { SButton } from './styles';

export const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <SButton type="button" onClick={handleClose}>
          X
        </SButton>
      </section>
    </div>
  );
};
