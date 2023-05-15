

const getQuote = async () => {
let url = "https://animechan.vercel.app/api/random"
const response = await fetch(url);
if(response.status !== 200){
    throw new Error ('cannot fetch this data')
}
const data = await response.json();
return data;
};

getQuote ()
.then(

    quote => console.log(quote)
    //  quote => animeName.innerHTML=quote.anime 
    //  quote => character.innerHTML=quote.character
    //  quote => word.innerHTML=quote.quote
     )
.catch( err => ('rejected' , err.message));

    var animeName = document.getElementById('anime');
    var character = document.getElementById('character');
    var word = document.getElementById('word');

