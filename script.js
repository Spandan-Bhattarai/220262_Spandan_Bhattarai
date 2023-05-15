function myfunction() {
    alert("fsee");
    const i = 2;
    var j=0;
    for (j=1; j<=10; j++)
    {
        document.getElementById("mul").innerHTML += `${i} * ${j} = ${i*j}<br>`;
    }
    console.log('$(i)')
}