const empCards = (data) =>
{
    if (!data)
    {
        return '';
    }

    var cardHTML = '';

    data.managers.forEach(manager =>
    {
        cardHTML += generateCard(manager, 'manager');
    });
    data.engineers.forEach(engineer =>
        {
            cardHTML += generateCard(engineer, 'engineer');
        });
        data.interns.forEach(intern =>
            {
                cardHTML += generateCard(intern, 'intern');
            });

    return cardHTML;
};

const generateCard = (data, type) =>
{
    //generates the 'extra' stuff for the emp based on their role
    var empTypeHTML = ``;
    switch (type)
    {
        case 'manager':
            empTypeHTML = `<p class="card-text">Office Number: ${data.officeNum}</p>`;
            break;
        case 'engineer':
            empTypeHTML = `<p class="card-text"><a href="https://github.com/${data.github}" class="card-link">Check Github</a></p>`;
            break;
        case 'intern':
            empTypeHTML = `<p class="card-text">School Name: ${data.school}</p>`;
            break;
    }

    var cardHTML = `
        <div class="card m-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Role: ${data.role}</h6>
                <h7 class="card-subtitle mb-2 text-muted">ID: ${data.id}</h7>
                ${empTypeHTML}
                <a href="mailto:${data.email}" target="_blank" class="card-link">Email Contact</a>
            </div>
        </div>`;

    return cardHTML;
}

// html export
module.exports = teamData =>
{
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet">
            <title></title>
        </head>
        <body class="bg-light">
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-info">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">My Team</a>
                    </div>
                </nav>
            </header>
            <main class="container-fluid row m-3">
                ${empCards(teamData)}
            </main>
        </body>
    </html>
    `;
};