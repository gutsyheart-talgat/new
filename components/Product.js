import style from '../styles/product.module.scss'

export default function Product() {
	const products = [
		{id:1, name:'Apples',price:'Rs. 100.00',count:0, border:'#FFB5B5', back:'#FFE5E6',color:'#FF3C28', img:'/apple.svg'},
		{id:2, name:'Orange',price:'Rs. 50.00',count:0, border:'#FFE798', back:'#FFF4E1',color:'#FF9200', img:'/orange.svg'},
		{id:3, name:'Strawberry',price:'Rs. 60.00',count:0, border:'#FFC2C9', back:'#FFE4E9',color:'#FF014E', img:'/strawbery.svg'},
		{id:4, name:'Banana',price:'Rs. 60.00',count:0, border:'#FFEEB8', back:'#FFFCE5',color:'#FFC300', img:'/banana.svg'},
		{id:5, name:'Kiwi',price:'Rs. 120.00',count:0, border:'#FFE5C2', back:'#FFF7ED',color:'#C9721E', img:'/kiwi.svg'},
		{id:6, name:'Pomogranete',price:'Rs. 80.00',count:0, border:'#FFBFBF', back:'#FFE5E6',color:'#FF3C28', img:'/Pomogranete.svg'},
		{id:7, name:'Apples',price:'Rs. 100.00',count:0, border:'#FFB5B5', back:'#FFE5E6',color:'#FF3C28', img:'/apple.svg'},
		{id:8, name:'Strawberry',price:'Rs. 60.00',count:0, border:'#FFC2C9', back:'#FFE4E9',color:'#FF014E', img:'/strawbery.svg'}
	]
  return (
		<div className={style.products}>
			{
				products.map(prod=>(
					<div key={prod.id} className={style.product} style={{backgroundColor:prod.back, border:`2px solid ${prod.border}`}}>
						<img src={prod.img}/>
						<div className={style.line}/>
						<div className={style.prodInfo}>
							<h1 style={{color:prod.color}}>{prod.name}</h1>
							<p>{prod.price}</p>
							<div>
								{prod.count}
							</div>
							<button style={{color:prod.color}}>Buy Now</button>
						</div>
					</div>
				))
			}
		</div>
	);
}
