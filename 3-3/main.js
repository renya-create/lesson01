const height=process.argv[2];

let array=[];

for(let i=1;i<=height;i++){

 

   for(let x=1;x<height*2;x++){
   array.push(`\b`);
   }

   for(let j=1;j<=height-i;j++){
     array.push(" ");
   }

   for(let j=1;j<=2*i-1;j++){
   array.push("*");
   }

   for(let j=1;j<=height-i;j++){
    array.push(" ");
   }
  
  console.log(array.join(""));
}