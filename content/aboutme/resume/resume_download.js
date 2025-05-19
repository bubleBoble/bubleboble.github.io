document.getElementById('download').addEventListener('click', function () {
        const element = document.getElementById('downloadme')

        const rootStyles = getComputedStyle(document.documentElement);
        const bgColor = rootStyles.getPropertyValue('--bg-color');
        const lineColor = rootStyles.getPropertyValue('--line-color');
        const textColor = rootStyles.getPropertyValue('--text-color');

        document.querySelectorAll('.ignore-this').forEach(function (elementToHide) {
                elementToHide.style.display = 'none';
        });

        const keywords_header = document.getElementById('keywords-header');
        const keywords = document.getElementById('keywords');

        keywords_header.style.borderTopColor = bgColor;
        keywords_header.style.color = bgColor;
        keywords.style.color = bgColor;

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

                keywords_header.style.borderTopColor = lineColor;
                keywords_header.style.color = textColor;
                keywords.style.color = textColor;
        }, 200);
});