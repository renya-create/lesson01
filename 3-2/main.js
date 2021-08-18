let tate=process.argv[2];

let yoko=process.argv[3];

for(let i=1;i<=tate;i++){

  let array=[];

  if(i%2===1){
    for(let j=1;j<=yoko;j++){

      if(j%2===1){
       array.push("*");
      }else{
       array.push("-");
      }

    }

  }else{ 
    for(let j=1;j<=yoko;j++){

      if(j%2===1){
       array.push("-");
      }else{
       array.push("*");
      }

    }
  }

console.log(array.join(""));
}