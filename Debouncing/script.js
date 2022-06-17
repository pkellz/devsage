function handler() {
    console.log("$100 payment submitted");
}

document.getElementById("submitBtn").addEventListener('click', debounce(handler, 500));

function debounce(f, ms)
{
    let timeout;

    return function()
    {
        if(timeout)
        {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            f();
        }, ms);
    }
}