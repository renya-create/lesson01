const height=process.argv[2];

for(let i=1;i<=height;i++){

  let array=[];

   for(let j=1;j<=height-i;j++){
     array.push(" ");
   }

   for(let j=1;j<=2*i-1;j++){
   array.push("*");
   }

  console.log(array.join(""));
}