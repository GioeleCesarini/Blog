var dropdown = document.querySelector('.dropdown');

    dropdown.addEventListener('mouseenter', function() {
        document.getElementById('myDropdown').style.display = 'block';
        document.querySelector('.dropbtn').style.backgroundColor = '#005ea6';
    });

    dropdown.addEventListener('mouseleave', function() {
        document.getElementById('myDropdown').style.display = 'none';
        document.querySelector('.dropbtn').style.backgroundColor = '#0084ff';
    });

    // Chiudi il menu a tendina se l'utente clicca fuori da esso
    window.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            document.getElementById('myDropdown').style.display = 'none';
            document.querySelector('.dropbtn').style.backgroundColor = '#0084ff';
        }
    });