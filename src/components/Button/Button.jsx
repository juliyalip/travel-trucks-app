import style from './Button.module.css'

export default function Button({ children, onClickBtn }) {
  return (
    <button type="byttun" onClick={onClickBtn} className={style.baseBtn}>
      {children}
    </button>
  );
}
