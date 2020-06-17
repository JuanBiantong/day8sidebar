let sideBar = [['Home', 'Profile'],['Setting'], ['Log Out']]
console.log(sideBar.length)
let divLeft = document.getElementById('left')

for( let i = 0; i < sideBar.length; i++){
    for(j = 0; j < sideBar[i].length; j++){
        let elementH3 = document.createElement('h3');
        let content = document.createTextNode(sideBar[i][j]);
        
        elementH3.appendChild(content);
        divLeft.appendChild(elementH3)
        
    }
    let hr = document.createElement('hr')
    divLeft.appendChild(hr)
}