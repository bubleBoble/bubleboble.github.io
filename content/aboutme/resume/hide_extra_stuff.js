document.getElementById('hide-extra-stuff').addEventListener('click', function () {
        document.querySelectorAll('.ignore-this').forEach(function (elementToHide) {
                elementToHide.style.display = 'none';
        });

});