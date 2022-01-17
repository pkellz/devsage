document.querySelector("[name='sentence']").addEventListener("keyup", async event => {
    if(!(event.which === 13))
        return;
    
    const request = await fetch(`/past-tense?${new URLSearchParams({
        sentence: event.target.value
    })}`);

    const pastTense = await request.json();
    
    document.querySelector("#output").innerHTML = pastTense.text;
});