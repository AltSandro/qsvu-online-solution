(() => {
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.onmousemove = (e) => {
            document.onclick = (event) => {
                const target = event.target;
                    if (!target.classList.contains('excludeClickEffect')) {
                        let circle = document.createElement('div');
                        circle.classList.add('clickCursorEffect');
                        circle.style.left = e.pageX + 'px';
                        circle.style.top = e.pageY + 'px';
                        document.body.appendChild(circle);

                        setTimeout(() => {
                            circle.remove();
                        }, 1000);
                    }
            };
        };
    }
})();

