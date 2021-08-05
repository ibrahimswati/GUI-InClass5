// ADD NEW ITEM TO END OF LIST

var end = document.getElementsByTagName('ul')[0];
var enditem = document.createElement("li");
var newnode = document.createTextNode("cream");
enditem.appendChild(newnode);
end.appendChild(enditem);



// ADD NEW ITEM START OF LIST

var start = document.getElementsByTagName('ul')[0];
var firstitem = document.createElement("li");
var newnode1 = document.createTextNode("kale");
firstitem.appendChild(newnode1);
start.insertBefore(firstitem, start.firstChild);


// ADD A CLASS OF COOL TO ALL LIST ITEMS

var list = document.querySelectorAll('li');
for(i = 0; i < list.length; i++) {
document.getElementsByTagName('li')[i].setAttribute("class", "cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

var length = list.length;
var heading1 = document.querySelector('h2').firstChild.nodeValue + '<span>'  + length + '</span>';
document.querySelector('h2').innerHTML = heading1;

