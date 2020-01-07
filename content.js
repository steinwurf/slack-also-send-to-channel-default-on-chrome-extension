'use strict';

document.addEventListener('DOMNodeInserted', function(e){
    const containers = e.relatedNode.getElementsByClassName('p-threads_footer__input_container');
    if (containers.length == 0)
        return;

    Array.from(containers).forEach(container => {
        const editor = container.getElementsByClassName('ql-editor')[0];
        if (editor === undefined)
            return;
        const checkbox = container.getElementsByClassName('p-threads_footer__broadcast_checkbox')[0];
        if (checkbox === undefined)
            return;

        const checkCheckbox = () => { if (!checkbox.checked) checkbox.click(); };

        // Initially the checkbox is disabled.
        // Add an onclick listener to the message textbox which ticks the
        // checkbox.
        editor.onclick = checkCheckbox

        // Try checking the checkbox after 500 ms so that the checkbox will be
        // checked when sending multiple messages.
        setTimeout(() => checkCheckbox(), 500);

        // If the checkbox is clicked manually, disable the default to allow
        // messages to not be sent to the channel
        checkbox.onclick = () => {editor.onclick = undefined;};
    });
});
