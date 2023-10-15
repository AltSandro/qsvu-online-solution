function setTableTopMargin() {
    let previousContentHeight = 0; 
    let scrollableTable = document.getElementById('scrollableTable');

    let previousContent = document.getElementById('previousContent'); 
    let scrollableTableTableTitle = scrollableTable.querySelector("thead th");
    if (previousContent && scrollableTableTableTitle) {
        previousContentHeight = previousContent.offsetHeight - (scrollableTableTableTitle.offsetHeight);
    }

    let marginValue = previousContentHeight + 'px';
    scrollableTable.style.paddingTop = marginValue;
}

window.addEventListener('load', setTableTopMargin);

window.addEventListener('resize', setTableTopMargin);
