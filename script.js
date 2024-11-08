const myFunction = (infoId)=>{
  const info = document.getElementById(infoId);
  if(info.style.display==='none'){
    info.style.display='block';
  }else{
    info.style.display='none';
  }
  

}