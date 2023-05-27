const page1=document.getElementById("outside");
  // or var or let
function opencard(){
  console.log("hey")
  page1.className='open_card'
}
function closecard(){
  console.log("hey")
  page1.className=''
}
// onclick='open()'
//selecting buttons
// document.getElementById('ul1').addEventListener('click',opencard)
document.getElementById('ul3').addEventListener('click',closecard)