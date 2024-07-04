import modal from '../styles/components/modal/modal.module.scss';

export default function Modal({ children }) {
  return <div className={modal.modal_container}>{children}</div>;
}
