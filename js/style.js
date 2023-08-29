// const loadPhone =async (searchText) =>{
//     const res =await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
//     const data=await res.json();
//     const intelligent=data.data;
//     // console.log(intelligent);
//     universe(intelligent);
// }

// 
// const loadPhone =async (searchText) =>{
//     const res =await fetch('https://openapi.programming-hero.com/api/ai/tools');
//     const data=await res.json();
//     const intelligent=data.data.tools;
//     // console.log(intelligent);
//     universe(intelligent);
// }












    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res =>res.json())
    .then(data => universe(data.data.tools));
    

    const universe =intelligent =>
    {
        //1.call a card
        const CardContainer=document.getElementById('phone-container')

        console.log(intelligent);

       

        intelligent.forEach(ai => {
            console.log(ai);
          //condition see all button
        //     const showAll=document.getElementById('showAll')
        //   if(intelligent.length>8)
        //   {
        //     showAll.classList.remove('hidden')
        //   }
        //   else{
        //     showAll.classList.add('hidden')
        //   }


            //display onle first 9 phone
            // intelligent=intelligent.slice(0,8);

            // console.log(intelligent);

            const Card=document.createElement('div');
            
            
            Card.classList=`card card-compact w-96 bg-base-100 shadow-xl`
            Card.innerHTML=`
            <figure><img src="${ai.image}" alt="No image found" /></figure>
            <div class="card-body">
            <h2 class="text-3xl font-bold">Feature</h2>
           <div class ="list-decimal">   <h2 class="card-title ">${ai.features}</h2> </div>
              <hr>
              <p class="text-2xl font-bold">${ai.name}</p>
              <p class="text-xl ">${ai.published_in
              }</p>
             
            </div>
          </div>
            `
            //append child
            CardContainer.appendChild(Card)

        })

    }

    //show all button










    // loadPhone()


