import {useEffect,useState} from 'react'
import BeerCard from './BeerCard';
function Beers(){
const [beerType,setBeerType]=useState('ale')
const [beerList,setBeerList]=useState()
useEffect(()=> {
fetch(`https://api.sampleapis.com/beers/${beerType}`)
.then(response => response.json())
.then(beers=>setBeerList(beers))
.catch(alert);
},[beerType]);

if (!beerList){
    return <h2>Loading...</h2> 
}else {
    return (
        <>
        <button onClick={()=>setBeerType('ale')}>Ale</button>
        <button onClick={()=>setBeerType('stouts')}>Stouts</button>
        <section id = "beerList">
            
            {beerList.map(beer => <BeerCard key={beer.id} beer={beer}/>)}
            
            </section>
            </>
    )
}

}

export default Beers