function getClass(Class){
    const element=document.getElementsByClassName(Class)
    return element;

}

const getId=(id)=>{

const element=document.getElementById(id);
return element;

}

const setText=(id,value)=>{

getId(id).innerText=value

}