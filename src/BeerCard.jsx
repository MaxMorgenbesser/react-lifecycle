import './beercard.css'

function BeerCard({beer}){
return (<div className='beerCard'>
    <img src ={beer.image} alt=""/>
<li><h2>{beer.name}</h2>
<p>{beer.price}</p></li>

</div>
)}


export default BeerCard