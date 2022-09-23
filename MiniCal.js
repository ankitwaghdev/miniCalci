function getValue (a,b,c) {
    //ans=`Numbers are ${num1},${num2},${opt}`
    //console.log(ans)
    num1=Number(a)
    num2=Number(b)
    opt=Number(c)
    if(opt==1)
    {
        ans=num1+num2
    }
    else if(opt==2)
    {
        ans=num1-num2
    }
    else if(opt==3)
    {
        ans=num1*num2
    }
    else if(opt==4)
    {
        ans=num1/num2
    }
    else if(opt==5)
    {
        ans=num1**num2
    }
    else if(opt==6)
    {
        ans=num1%num2
    }
    alert(`Answer is ${ans}`)
    return false;
}