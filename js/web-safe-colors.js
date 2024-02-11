(() => {

    const getAbbreviatedColor = (color) => {
        return '#' + color[1] + color[3] + color[5];
      };    

    const displayColor = () => {
        let table = document.getElementById("output");
        let tbody = document.createElement("tbody");

        let count = 1;
        for (let r = 0; r <= 255; r += 51) {
            for (let g = 0; g <= 255; g += 51) {
                for (let b = 0; b <= 255; b += 51) {
                    let tr = document.createElement("tr");

                    let hex = `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;

                    let data = [count, hex];

                    for (let i = 0; i < data.length; ++i) {
                        let td = document.createElement("td");
                        td.setAttribute("class", "text-center");
                        let cell = document.createTextNode(data[i]);
                        td.appendChild(cell);
                        tr.appendChild(td);
                    }

                    let td = document.createElement("td");
                    let div = document.createElement("div");
                    div.style.backgroundColor = hex;
                    div.style.height = '2rem';
                    div.style.width = '100%';
                    div.style.color = (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? 'black' : 'white';
                    div.textContent = getAbbreviatedColor(hex);
                    td.appendChild(div);
                    tr.appendChild(td);

                    tbody.appendChild(tr);
                    count++;
                }
            }
        }

        table.appendChild(tbody);
    }

    window.onload = function () {
        displayColor();
    };

})();