const form=document.querySelector("#transactionForm");
const add=document.querySelector("#transactionList");

const balance=document.querySelector(".card-balance");
const income=document.querySelector(".card-income");
const expense=document.querySelector(".card-expense");
const savings=document.querySelector(".card-savings");
  
     let totalExpense=0;
     let totalIncome=0;
     let totalSaving=0;
     
const balanceAmount = document.createElement("h4");
const incomeAmount = document.createElement("h4");
const expenseAmount = document.createElement("h4");
const savingAmount = document.createElement("h4");

balance.append(balanceAmount);
income.append(incomeAmount);
expense.append(expenseAmount);
savings.append(savingAmount);

balanceAmount.textContent="₹0";
incomeAmount.textContent="₹0";
expenseAmount.textContent="₹0";
savingAmount.textContent="₹0";

form.addEventListener("submit",function(e){
         e.preventDefault();
         console.log(form.value)
    let title = form.elements["Title"].value;
    let amount = Number(form.elements["Amount"].value);
    let category = form.elements["Category"].value;
    let type = form.elements["Type"].value;
    let date = form.elements["Date"].value;


    let row=document.createElement("tr");
    row.innerHTML=`
    <td>${date}</td>
    <td>${title}</td>
     <td>${category}</td>
      <td>${type}</td>
       <td>${amount}</td>
       <td>
     
       <button class="del-btn">Del</button>
        ` 
     add.append(row);

     if(type=="Expense"){
      totalExpense+=amount;
    
     }
     if(type=="Income"){
      totalIncome+=amount;
     }
     if(type=="Savings"){
      totalSaving+=amount;
     }
    
   expenseAmount.textContent = `₹${totalExpense}`;
    incomeAmount.textContent = `₹${totalIncome}`;
    savingAmount.textContent = `₹${totalSaving}`;

    let totalBalance=totalIncome - totalExpense-totalSaving;
     
     
         balanceAmount.textContent = `₹${totalBalance}`;

         form.reset();
        
            });
       
       add.addEventListener("click",function(e){
          if(e.target.classList.contains("del-btn")){
            let row=e.target.parentElement.parentElement;
            let amounts=row.children[4].textContent;
         let types=row.children[3].textContent;

            if(types=="Expense"){
                  totalExpense-=amounts;
                
                 }
            if(types=="Income"){
                  totalIncome-=amounts;
                 }
            if(types=="Savings"){
                  totalSaving-=amounts;
                 }
            
      expenseAmount.textContent = `₹${totalExpense}`;
      incomeAmount.textContent = `₹${totalIncome}`;
      savingAmount.textContent = `₹${totalSaving}`;

      totalBalance=totalIncome - totalExpense-totalSaving;
     
         balanceAmount.textContent = `₹${totalBalance}`;
           
            row.remove();  
          }
           });