<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tableau avec Boutons</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 8px;
            text-align: center;
        }
        .buttons {
            display: flex;
            justify-content: space-around;
        }
    </style>
</head>
<body>
    <h1>Gestion du Tableau</h1>
    <table id="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <!-- Les lignes seront ajoutées ici -->
        </tbody>
    </table>
    <br>
    <button onclick="addRow()">Ajouter une ligne</button>

    <script >
   let idCounter = 1;

function addRow() {
    const table = document.getElementById('table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const idCell = newRow.insertCell(0);
    idCell.textContent = prompt("id ? ");

    const nameCell = newRow.insertCell(1);
    nameCell.textContent = prompt("smia  ?");

    const actionCell = newRow.insertCell(2);
    actionCell.innerHTML = `
        <div class="buttons">
            <button onclick="editRow(this)">Éditer</button>
            <button onclick="deleteRow(this)">Supprimer</button>
        </div>
    `;
}

function editRow(button) {
    const row = button.parentNode.parentNode.parentNode;
    const nameCell = row.cells[1];
    const idCell = row.cells[0];

    const newName = prompt("Entrez le nouveau nom :", nameCell.textContent);
    const id = prompt("Entrez le nouveau id :", idCell.textContent);

    if (newName) {
        nameCell.textContent = newName;
        }
    if (id) {    
        idCell.textContent = id;
    }
}

function deleteRow(button) {
    const row = button.parentNode.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

</script>
</body>
</html>
