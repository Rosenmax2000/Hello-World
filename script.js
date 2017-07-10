var colorList = ["DeepPink", "Salmon", "Orange", "Moccasin", "Gold",
"Olive", "Aqua", "Lime", "Magenta", "Indigo", "Orchid", "SlateBlue",
"MidnightBlue", "SkyBlue", "AntiqueWhite", "Tomato", "Lavendar"];
var last = 35;
for (i = 0; i< last; i++){
  var cBox = document.createElement("DIV");
  cBox.id = i;
  cBox.className = "color-box";
  cBox.innerHTML = 'test';
  cBox.style.backgroundColor = colorList[i%17];
  document.body.appendChild(cBox);
  console.log('got to for loop');
}
