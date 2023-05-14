const shorten=(title)=>{
    const titleSplited=title.split(" ");
    const newTitle=`${titleSplited[0]} ${titleSplited[1]}`;
    return newTitle
}
export {shorten}

