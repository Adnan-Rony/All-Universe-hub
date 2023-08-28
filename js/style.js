// const loadPhone =async (searchText) =>{
//     const res =await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
//     const data=await res.json();
//     const intelligent=data.data;
//     // console.log(intelligent);
//     universe(intelligent);
// }


    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res =>res.json())
    // .then(data => universe(data.data));
    

    const universe =intelligent =>
    {
        //1.call a card
        const CardContainer=document.getElementById('phone-container')

        console.log(intelligent);

       

        intelligent.forEach(ai => {
            console.log(ai);
          


            const Card=document.createElement('div');
            
            
            Card.classList=`card card-compact w-96 bg-base-100 shadow-xl`
            Card.innerHTML=`
            <figure><img src="${ai.image}" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">${ai.phone_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
            `
            //append child
            CardContainer.appendChild(Card)

        })

    }

    loadPhone()


