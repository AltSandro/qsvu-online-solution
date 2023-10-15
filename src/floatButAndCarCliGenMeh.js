(()=>{
    document.addEventListener('DOMContentLoaded', function() {
        const shareTxtButtons = document.querySelectorAll('.section-wrapper .floating-action-button .share-txt');
        const portfolioItems = document.querySelectorAll('.portfolio-box.awSlider-item');

        shareTxtButtons.forEach(function(shareTxtButton, index) {
            shareTxtButton.addEventListener('click', function() {
                const correspondingPortfolioItem = portfolioItems[index];
                if (correspondingPortfolioItem) {
                    correspondingPortfolioItem.click(); 
                }
            });
        });
    });
}) ();