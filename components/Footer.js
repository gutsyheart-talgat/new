import style from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <div className={style.footer}>
      <button>Explore More</button>
			<div className={style.info}>
				<p><span style={{color:"#FF3800"}}>50+</span> New Arrivals</p>
				<p><span style={{color:"#00C44E"}}>80+</span> Fresh Fruits</p>
				<p><span style={{color:"#377BFF"}}>2M+</span> Customers</p>
			</div>
    </div>
  );
}
