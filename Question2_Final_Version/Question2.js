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

var mySelect = document.getElementById('mySelect');
var mySelect2 = document.getElementById('mySelect2');


mySelect.onchange = function() {
    var text = "<table border ='1'><tr><th>Region</th><th>Model</th><th>Sales</th></tr>"
        var x = document.getElementById("mySelect").value;
        var y = document.getElementById("mySelect2").value;

        if(x!='All' && y=='All'){
            for (let i=0;i<data.length;i++){
                if(data[i].region==x){
                    text+="<tr><td>"+data[i].region+"</td><td>"+data[i].model+"</td><td>"+data[i].sales+"</td></tr>"
                }
                }
                text+="</table>";
                document.getElementById("demo").innerHTML = text;
        }else if(x=='All' && y!='All'){
            for (let i=0;i<data.length;i++){
                if(data[i].model==y){
                    text+="<tr><td>"+data[i].region+"</td><td>"+data[i].model+"</td><td>"+data[i].sales+"</td></tr>"
                }
                }
                text+="</table>";
                document.getElementById("demo").innerHTML = text;
        }else if(x!='All' && y!='All'){
            for (let i=0;i<data.length;i++){
                if(data[i].region==x && data[i].model==y){
                    text+="<tr><td>"+data[i].region+"</td><td>"+data[i].model+"</td><td>"+data[i].sales+"</td></tr>"
                }
                }
                text+="</table>";
                document.getElementById("demo").innerHTML = text;
        }else{
            for (let i=0;i<data.length;i++){
                text+="<tr><td>"+data[i].region+"</td><td>"+data[i].model+"</td><td>"+data[i].sales+"</td></tr>"
               }
               text+="</table>";
           document.getElementById("demo").innerHTML = text;
        }
        
    }

mySelect2.onchange = function() {
    var text = "<table border ='1'><tr><th>Region</th><th>Model</th><th>Sales</th></tr>"
        var x = document.getElementById("mySelect").value;
        var y = document.getElementById("mySelect2").value;

        if(x!='All' && y=='All'){
            for (let i=0;i<data.length;i++){
                if(data[i].region==x){
                    text+="<tr><td>"+data[i].region+"</td><td>"+data[i].model+"</td><td>"+data[i].sales+"</td></tr>"
                }
                }
                text+="</table>";
                document.getElementById("demo").innerHTML = text;
        }else if(x=='All' && y!='All'){
            for (let i=0;i<data.length;i++){
                if(data[i].model==y){
                    text+="<tr><td>"+data[i].region+"</td><td>"+data[i].model+"</td><td>"+data[i].sales+"</td></tr>"
                }
                }
                text+="</table>";
                document.getElementById("demo").innerHTML = text;
        }else if(x!='All' && y!='All'){
            for (let i=0;i<data.length;i++){
                if(data[i].region==x && data[i].model==y){
                    text+="<tr><td>"+data[i].region+"</td><td>"+data[i].model+"</td><td>"+data[i].sales+"</td></tr>"
                }
                }
                text+="</table>";
                document.getElementById("demo").innerHTML = text;
        }else{
            for (let i=0;i<data.length;i++){
                text+="<tr><td>"+data[i].region+"</td><td>"+data[i].model+"</td><td>"+data[i].sales+"</td></tr>"
               }
               text+="</table>";
           document.getElementById("demo").innerHTML = text;
        }
        
    }

    function myFunction3(){
        var text = "<table border ='1'><tr><th>Region</th><th>Model</th><th>Sales</th></tr>"
        for (let i=0;i<data.length;i++){
         text+="<tr><td>"+data[i].region+"</td><td>"+data[i].model+"</td><td>"+data[i].sales+"</td></tr>"
        }
        text+="</table>";
    document.getElementById("demo").innerHTML = text;
    }
