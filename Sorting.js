function sortNumbers(){
    const input = document.
    getElementById('numbers').value;
    const numbers= input.split(',')
    .map(Number);
    const sortNumbers= numbers
    .sort((a,b) => a-b);
    document.getElementById('result')
    .innerText='Sorted numbers: '
    + sortNumbers.join(', ');
    input.value=""
}