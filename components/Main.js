import style from "../styles/Main.module.scss"
import Product from "./Product"
export default function Main(){
	
  return(
		<div className={style.Main}>
			<div className={style.ads}>
				<div className={style.deal}>
					<h1>TOP DEALS</h1>
					<p>Upto <br/> 50% Off</p>
				</div>
				<div className={style.sale}>
					<h1>FLASH SALE</h1>
					<p>From <br/>
						March 1 - 10</p>
				</div>
				<div className={style.arrival}>
					<h1>New <br/> Arrivals</h1>
				</div>
			</div>
			<h1 className={style.h1}>Recently Added</h1>
			<Product/>
		</div>
	)
}