import style from "../styles/Header.module.scss";
export default function Header() {
  return (
    <div className={style.header}>
      <img src="/Logo.svg" className={style.logo} />
      <input type="text" placeholder={`seacrh `} />
      <div className={style.btns}>
        <button>
          <img src="/Notification.svg" />
        </button>
        <button>
          <img src="/Buy.svg" />
        </button>
        <button>
          <img src="Profile.svg" />
        </button>
      </div>
      <button className={style.download}>Download App</button>
    </div>
  );
}
