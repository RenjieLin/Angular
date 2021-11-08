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

function myFunction() {
        var x = String(document.getElementById("mySelect").value)
        for (let i=0;i<data.length;i++){
            if(data[i].region==x){
                text+="<tr><td>"+data[i].region+"</td><td>"+data[i].model+"</td><td>"+data[i].sales+"</td></tr>"
            }
            }
            text+="</table>";
            document.write(text);
}


