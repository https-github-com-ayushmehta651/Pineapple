function getroutes(source,dest){
    var routes = [['500D','Hebbala Bridge', 'Kempapura', 'Veeranapalya', 'Manyatha Tech Park', 'Junction Of Nagavara', 'HBR Layout', 'Kalyananagara Bus Station', 'Babusabpalya', 'Banasawadi', 'Vijaya Bank Colony', 'Ramamurthy Nagara', 'Kasthuri Nagara', 'Tin Factory', 'K.R.Puram Railway Station', 'B.Narayanapura', 'Mahadevapura', 'Emc 2', 'Doddanekkundi', 'Rainbow Hospital', 'Karthiknagara', 'Marathhalli Bridge','Marathahalli Innovative Multiplex', 'Kadubisanahalli', 'New Horizon College', 'Devarabisanahalli', 'Intel Ring Road', 'Cs-Accenture B7 Eco Space', 'Bellanduru Junction', 'Bellanduru', 'Ibbaluru', 'Agara Junction', 'H.S.R B.D.A Complex', 'H.S.R. Layout (S.I. Apartment)', 'Central Silk Board'],['600A','A','B','Central Silk Board']];
    var dis = [['500D',0,0.4,1.5,2.3,2.8,3.5,5.3,5.6,6.9,8.0,9.1,10.4,10.9,11.6,12,13,14,15.2,15.5,16,17,18.5,20,21,21.8,22.3,23,23.5,23.8,24.5,26,28,29,30.6],['600A',0,1,1.5]];
    var distance = [];
    var Spres = [-1,-1];
    var Dpres = [-1,-1];
    var fare = 0;
    for(let i=0;i<routes.length;i++){
        for(let j=0;j<routes[i].length;j++){
            if(source == routes[i][j]){
                Spres = [i,j];
                //break;
            }
        }
        if(Spres[0] != -1 && Dpres[0] != -1){
            for(let j=0;j<routes[i].length;j++){
                if(dest == routes[i][j]){
                    Dpres = [i,j];
                    //break; 
                }
            if(Dpres[0] != -1){
                //break;
            }
            }
        } 
        else if(Spres[0] != -1 && Dpres[0] == -1){
            for(let j = 0; j < routes.length;j++){
                for(let k = 0;k<routes[j].length;k++){
                    if(dest == routes[j][k])
                        Dpres = [j,k];
                }
            }
        }
        else{

        }
    }
    console.log(Spres + " : " + Dpres);
    if(Spres[0] == -1 || Dpres[0]==-1){
        console.log("Not found");
    }
    else if(Spres[0] == Dpres[0]){
        distance.push(Math.abs(dis[Dpres[0]][Dpres[1]] - dis[Spres[0]][Spres[1]]));
        if(dis[Spres[0]].length < 6)
            fare+=5;
        else
            fare += parseInt(Math.abs(dis[Dpres[0]][Dpres[1]] - dis[Spres[0]][Spres[1]]) / parseInt((dis[Spres[0]][dis[Spres[0]].length-1] - dis[Spres[0]][1]) /6)+1)*5 ;
    }
    else if(Spres[0] != Dpres[0]){
        var common = [];
        for(let i = 0;i<routes[Spres[0]].length;i++){
            for(let j = 0;j<routes[Dpres[0]].length;j++){
                if(routes[Dpres[0]][j] == routes[Spres[0]][i]){
                    common.push(routes[Dpres[0]][j]);
                }
            }
        }
        var min_dist = 10000;
        for(let i = 0; i<common.length;i++){
            //console.log(((Math.abs(dis[Spres[0]][routes[Spres[0]].indexOf(common[i])] - dis[Spres[0]][Spres[1]])) + Math.abs(dis[Dpres[0]][routes[Dpres[0]].indexOf(common[i])] - dis[Dpres[0]][Dpres[1]])));
            if(((Math.abs(dis[Spres[0]][routes[Spres[0]].indexOf(common[i])] - dis[Spres[0]][Spres[1]])) + Math.abs(dis[Dpres[0]][routes[Dpres[0]].indexOf(common[i])] - dis[Dpres[0]][Dpres[1]])) < min_dist){
                min_dist = ((Math.abs(dis[Spres[0]][routes[Spres[0]].indexOf(common[i])] - dis[Spres[0]][Spres[1]])) + Math.abs(dis[Dpres[0]][routes[Dpres[0]].indexOf(common[i])] - dis[Dpres[0]][Dpres[1]]));
                if(dis[Spres[0]].length > 6)
                    fare += dis[Spres[0]][routes[Spres[0]].indexOf(common[i])] / (dis[Spres[0]][(dis[Spres[0]].length)-1]/6) * 5;
                else
                    fare += 5;
                if(dis[Dpres[0]].length > 6)    
                    fare += dis[Dpres[0]][routes[Dpres[0]].indexOf(common[i])] / (dis[Dpres[0]][(dis[Dpres[0]].length)-1]/6) * 5;
                else
                    fare += 5;
            }
        }
        distance =  min_dist;
    }
    console.log("Distance travelling: " + distance + "km");
    if(Spres[0] == Dpres[0])
        console.log("Bus number is: " + routes[Spres[0]][0]);
    else   
        console.log("Bus numbers are: " + routes[Spres[0]][0] + " and " + routes[Dpres[0]][0]);
    console.log("Total fare is: " + fare);
}
getroutes('A', 'B');