import React, { useState } from 'react'
import '../css/currenc.css';
import { FaArrowRightLong } from "react-icons/fa6";
import axios from 'axios'; 


let BASE_URL ="https://api.freecurrencyapi.com/v1/latest";
let APİ_KEY = "fca_live_YTIb5sqbz1hgDS5KkTeNGzLd1brIUIWM7wObUZ0T";
let EXCHANGE_APİ = ``

function currency() {
const[amount, setAmount] = useState();
const[fromCurrency, setFromCurrency] = useState('USD');
const[toCurrency, setToCurrency] =useState('TRY');
const[result, setResult] =useState(0);
const exchange = async () =>{

   const response =  await axios.get(`${BASE_URL}?apikey=${APİ_KEY}&base_currency=${fromCurrency}`);
   const result= (response.data.data[toCurrency] * amount).toFixed(2);
   setResult(result);

}



  return (
    <div className='currenc-div'>
<div style={{marjinTop:'-20px', fontFamily:'arial',backgroundColor:'black', color:'#fff', width:'100%', textAlign:'center'}}>
  <h3 >DÖVİZ KURU UYGULAMASI</h3>
</div>

<div style={{marginTop:'25px'}}>

<input
value={amount}
onChange={(e) => setAmount(e.target.value)}

type="number" className='amount'/>

<select onChange={(e) => setFromCurrency(e.target.value)} className='from-currenc-option'>
  <option >USD</option>
  <option >EUR</option>
  <option >TL</option>
</select>

<FaArrowRightLong style={{fontSize:'25', color: 'mintcream', marginRight: '10px', marginTop:'5px'}}/>

<select onChange={(e) => setToCurrency(e.target.value)} className='to-currenc-option'>
  <option >TRY</option>
  <option >EUR</option>
  <option >USD</option>
</select>

<input value={result} onChange={(e) => setResult(e.target.value)} type="number" className='result'/>

</div>
<div>
  
<button onClick={exchange} className='exchange-button'>ÇEVİR</button>
</div>
     
    </div>
  )
}

export default currency
