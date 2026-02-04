import style from './Button.module.css'

export default function Button({ children, onClickBtn, baseColor }) {
  return (
    <button type="button" onClick={onClickBtn} className={style.baseBtn}style={{backgroundColor: baseColor ? "transparent" : "#e44848"}}>
      {children}
    </button>
  );
}