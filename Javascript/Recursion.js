function factorial(n)
{
    if(n == 1 || n == 0)
        return 1;
    else
        return n * factorial(n-1);
}

console.log(factorial(4)); // 24

// factorial(4)
//    4 * factorial(3)
//        3 * factorial(2)
//            2 * factorial(1)
