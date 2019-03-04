'use strict';

document.addEventListener('DOMNodeInserted', function(e){
    var nodes = e.relatedNode.getElementsByClassName('p-threads_footer__broadcast_checkbox');
    Array.from(nodes).forEach(element => {
        console.log(element)
        element.checked = true;
    });
});
