import React from 'react'
import style from './Modal.module.scss'
import { connect } from 'react-redux';
import Button from '../Button/Button';

interface I_ModalProps {
  isShown: boolean;
  content: string;
  title:string;
  onModalClose: Function;
  onModalConfirm: Function;
}

const Modal: React.FC<I_ModalProps> = (props) => {
  return (
    <div
      className={style.Modal}
      data-testid="Modal"
      style={{ display: props.isShown ? "flex" : "none" }}>
      <div className={style.modalContent}>
        {props.title && <div className={style.title}>{props.title}</div>}
        <div className={style.content}>{props.content}</div>
        <div className={style.buttons}>
          <Button bgColor="tomato" buttonClicked={() => {props.onModalClose()}}>Close</Button>
          <Button buttonClicked={() => {props.onModalConfirm()}}>Ok</Button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(s: any, p: any) {
  return {...p,...s.modal,};
}

function mapDispatchToProps(dispatch: Function) {
  return {
    onModalClose: () => dispatch({ type: "HIDE_MODAL" }),
    onModalConfirm: () => dispatch({ type: "CANCEL_MODAL"})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

