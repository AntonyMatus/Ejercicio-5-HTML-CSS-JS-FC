function sort(ascending, columnClassName, tableId) {
    var tbody = document.getElementById(tableId).getElementsByTagName(
            "tbody")[0];
    var rows = tbody.getElementsByTagName("tr");

    var unsorted = true;

    while (unsorted) {
        unsorted = false

        for (var r = 0; r < rows.length - 1; r++) {
            var row = rows[r];
            var nextRow = rows[r + 1];

            var value = row.getElementsByClassName(columnClassName)[0].innerHTML;
            var nextValue = nextRow.getElementsByClassName(columnClassName)[0].innerHTML;

            value = value.replace(',', '.'); // in case a comma is used in float number
            nextValue = nextValue.replace(',', '.');

            if (!isNaN(value)) {
                value = parseFloat(value);
                nextValue = parseFloat(nextValue);
            }

            if (ascending ? value > nextValue : value < nextValue) {
                tbody.insertBefore(nextRow, row);
                unsorted = true;
            }
        }
    }
};


function myFunction(){
    //Declare variables
    var input, filter, table, tr, td, i, j, visible;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("content-table");
    tr = table.getElementsByTagName("tr");
    console.log(tr);

    for ( i = 0; i < tr.length; i++) {
        visible = false;

        // optenemos todas las celdas de la fila, no solo la primera
        td = tr[i].getElementsByTagName("td");
        for(j = 0; j < td.length; j++){
            if(td[j] && td[j].innerHTML.toUpperCase().indexOf(filter) > -1 ){
                visible = true;
            }
        }
        if (visible == true) {
            tr[i].style.display = "";  
            tr[0].style.display = "";          
        } else {
            tr[i].style.display = "none";
            tr[0].style.display = ""
            
        }  
    }
}