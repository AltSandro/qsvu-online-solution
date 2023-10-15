(()=>{
    document.addEventListener('DOMContentLoaded', function () {
        const elements = document.querySelectorAll('.section-wrapper .floating-action-button ul li');
    
        elements.forEach(element => {
            const originalDelay = window.getComputedStyle(element).getPropertyValue('transition-delay');
    
            element.addEventListener('mouseover', () => {
                element.style.transitionDelay = '0s';
            });
    
            element.addEventListener('mouseout', () => {
                element.style.transitionDelay = originalDelay;
            });
        });
    });
}) ();


