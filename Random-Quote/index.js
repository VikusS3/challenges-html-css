const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fa2f840eb9msh46ff1db4fb5a394p158470jsn01e9bdb3d085',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
};

async function fetchData() {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        document.getElementById('autor').innerText = data.originator.name;
        document.getElementById('tag-1').innerText = data.tags[0];
        document.getElementById('tag-2').innerText = data.tags[1];
        document.getElementById('phare').innerHTML = data.content;
    } catch (error) {
        console.error(error);
    }
}

fetchData();

document.getElementById('newQuoteBtn').addEventListener('click', fetchData);
document.getElementById('copiarQuoteBtn').addEventListener('click', () => {
    const text = document.getElementById('phare').innerText;
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    navigator.clipboard.writeText(text); 
    document.body.removeChild(input);

    const copiedText = document.querySelector('.copiado');
    copiedText.classList.add('copiado-mostrado')

    setTimeout(() => {
        copiedText.classList.remove('copiado-mostrado');
    }, 2000); 
});