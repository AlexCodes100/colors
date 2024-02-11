(() => {

    const setValues = () => {
        let dropdowns = document.querySelectorAll('select');
        dropdowns.forEach(dropdown => {
            for (let i = 0; i < 256; ++i) {
                let option = document.createElement('option');
                option.text = option.value = i;
                dropdown.add(option);
            }
            dropdown.addEventListener('change', function () {
                displayColor();
            });
        });
    }

    const displayColor = () => {
        let dropdowns = document.querySelectorAll('select');
        let r = Number(dropdowns[0].value);
        let g = Number(dropdowns[1].value);
        let b = Number(dropdowns[2].value);

        let rgb = `(${r},${g},${b})`;
        let hex = `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;

        let table = document.getElementById("output");
        let tbody = document.createElement("tbody");
        let tr = document.createElement("tr");

        let data = [rgb, hex];

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
        td.appendChild(div);
        tr.appendChild(td);

        tbody.appendChild(tr);
        table.appendChild(tbody);
    }

    window.onload = function () {
        setValues();
    };

})();