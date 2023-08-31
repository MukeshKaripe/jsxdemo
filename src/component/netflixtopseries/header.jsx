function Card(props) {
    console.log(props);
    var a='ar';
    var b = 'ok';
    var c = 'da';
    // we  use mostly array
    var array=['a','b','c'];
    // const writew=document.write(array[1]);
    
    return (
        <>
        <div className="card">
            <img src={props.imgsrc} alt='mypic' ></img>
       <div className="card_info">
        <span className="card-title">
            {props.sname}
            {/* {writew} */}
            {/* mapping
        {array.map(callbackfunction(mapdata){
        console.log(mapdata);
        return{
            <card
            imgsrc = {mapdata[0].imgsrc}
            title = {mapdata[0].title} 
            />
        }
    });}
    function name(a){

    }
    ===== 
    arrow function
    const name = (a) => {

    }
for  mapping we use arrow function without using const variable

            */}
            
        </span>
        <a href={props.ref} target="_optionalname" >click</a>
       </div>
       <h1>
        
       </h1>
        </div>
        </>
    );
    

};
export  {Card};