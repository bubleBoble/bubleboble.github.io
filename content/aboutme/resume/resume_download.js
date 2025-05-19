document.getElementById('download').addEventListener('click', function () {
        const element = document.getElementById('downloadme');

        document.querySelectorAll('.ignore-this').forEach(function (elementToHide) {
                elementToHide.style.display = 'none';
        });

        html2pdf(element, {
                margin: 0,
                filename: 'custom_filename.pdf',
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
                // image: { type: 'png', quality: 5 },
        });

        setTimeout(() => {
                document.querySelectorAll('.ignore-this').forEach(function (elementToShow) {
                        elementToShow.style.display = '';
                });
        }, 200);
});