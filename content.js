'use strict';

document.addEventListener('DOMNodeInserted', function(e){
    var nodes = e.relatedNode.getElementsByClassName('reply_broadcast_toggle');
    Array.from(nodes).forEach(element => {
        console.log(element)
        element.checked = true;
    });
});
