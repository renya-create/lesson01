const x=process.argv[2]/100|0;
const y=(process.argv[2]-x*100)/10|0;
const z=process.argv[2]-x*100-y*10;

console.log(`100円玉${x}枚,10円玉${y}枚,1円玉${z}枚`);