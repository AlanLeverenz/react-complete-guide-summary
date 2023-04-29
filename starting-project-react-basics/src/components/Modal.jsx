import classes from './Modal.module.css';

function Modal() {
  return (
    <>
      <div className={classes.backdrop} />
      <dialog className={classes.modal}></dialog>
    </>
  );
}

export default Modal;