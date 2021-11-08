const data = [
    {region: 'US', model: 'A', sales: 150},
    {region: 'US', model: 'B', sales: 120},
    {region: 'US', model: 'C', sales: 350},
    {region: 'EU', model: 'A', sales: 200},
    {region: 'EU', model: 'B', sales: 100},
    {region: 'EU', model: 'C', sales: 250},
    {region: 'CA', model: 'A', sales: 200},
    {region: 'CA', model: 'B', sales: 100},
    {region: 'CA', model: 'C', sales: 230},
    {region: 'CA', model: 'D', sales: 400},
]


data.sort((a, b) => b.region.localeCompare(a.region));

var text = "<table border ='1'><tr><th>Region</th><th>Model</th><th>Sales</th></tr>"

var cur = data[0].region;
var total=0;
for (let i=0;i<data.length;i++){


    if(data[i].region!=cur){
        //total -=data[i].sales;
       text+="<tr><td>"+cur+"</td><td>"+"sum" +"</td><td>"+total+"</td></tr>"
       cur = data[i].region;
        total-=total;  
    }
    total+=data[i].sales;
 text+="<tr><td>"+data[i].region+"</td><td>"+data[i].model+"</td><td>"+data[i].sales+"</td></tr>"
 if(i==data.length-1){
     text+="<tr><td>"+data[i-1].region+"</td><td>"+"sum" +"</td><td>"+total+"</td></tr>"
 }
}

text+="</table>";
document.write(text);
