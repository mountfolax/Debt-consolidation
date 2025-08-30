let addDebt = document.getElementById('add_btn');
let view = document.getElementById("view");
let calculate = document.getElementById("calcBtn")
let montlyPayment = document.getElementsByClassName("montlyPayment");
let remaningDebt = document.getElementsByClassName("remaning_debt");
let currentApr = document.getElementsByClassName("aPr");

let output = document.getElementById('output')





function totalDebt() {
  let storeValue = [];
  for (let i = 0; i < remaningDebt.length; i++) {
    storeValue.push(remaningDebt[i].value);
  }

  const sum = storeValue.reduce((acc, num) => {
    return acc + Number(num);
  }, 0);

  output.innerHTML += `
        <h1>TotalDebt = $${sum} </h1>
   
   `;
}


function totalApr (){
  let storeValue = [];
  for (let i = 0; i < currentApr.length; i++) {
    storeValue.push(currentApr[i].value);
  }

  const sum = storeValue.reduce((acc, num) => {
    return acc + parseFloat(num);
  }, 0);

  output.innerHTML += `
        <h1>TotalApr = %${sum} </h1>
   
   `;
}


function getTotalMontlyPayment(){

  let storeValue = []  
   for(let i = 0; i < montlyPayment.length; i++){
        storeValue.push(montlyPayment[i].value)
    }

  const sum =  storeValue.reduce((acc, num) => {
     return  acc + Number(num)
   }, 0)

   output.innerHTML += `
        <h1>TotalMontlyPayment = $${sum} </h1>

   `
}

calculate.addEventListener('click', function(){
  totalDebt();
  totalApr()
  getTotalMontlyPayment();
})




addDebt.addEventListener("click", function () {
    view.innerHTML += render();
});



function render() {
     let screen = `
     <div class = "containers">
           <div class="flex flex-col gap-y-[5px] " >
             <label for="DEBT NAME" class="text-sm">DEBT NAME</label>
             <input
             id = "DEBT NAME"
               type="text"
               placeholder="e.g medical"
               class="bg-blue-100 w-[10rem] border border-[2px] border-gray-300 outline-none p-[5px] w-[13rem]"
             />
           </div>

           <div class="flex flex-col gap-y-[5px]">
             <label for="REMAINING DEBT AMOUNT" class="text-sm"
               >REMAINING DEBT AMOUNT</label
             >
             <div class="flex border-[2px] border-gray-300 w-[13rem]">
               <span class="p-[5px] border-r-gray-300 border-r-[2px]">$</span>
               <input
               id = "REMAINING DEBT AMOUNT"
                 type="number"
                 placeholder="5000"
                 class="bg-blue-100 w-[11.45rem] py-[5px] pl-[10px] border-none outline-none remaning_debt"
               />
             </div>
           </div>

           <div class="flex flex-col gap-y-[5px]">
             <label for="CURRENT APR" class="text-sm">CURRENT APR</label>
             <div class="border-[2px] border-gray-300 w-[13rem] flex">
               <input
                  id = "CURRENT APR"
                 type="number"
                 placeholder="15.99"
                 class="bg-blue-100 w-[11rem] p-[5px] outline-none border-none aPr"
               />
               <span class="p-[5px] border-l-gray-300 border-l-[2px]">%</span>
             </div>
           </div>

           <div class="flex flex-col gap-y-[5px]">
             <label for="CURRENT MONTHLY PAYMENT" class="text-sm"
               >CURRENT MONTHLY PAYMENT</label
             >
             <div class="border-[2px] border-gray-300 w-[13rem] flex">
               <span class="p-[5px] border-r-gray-300 border-r-[2px]">$</span>
               <input
                id = "CURRENT MONTHLY PAYMENT"
                 type="number"
                 placeholder="200"
                 class="bg-blue-100 border-none outline-none p-[5px] w-[11.45rem] montlyPayment"
               />
             </div>
           </div>
        </div>
     `;

    return screen;
    
}


