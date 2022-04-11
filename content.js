'use strict';

document.addEventListener('DOMNodeInserted', function(e){
    const containers = e.relatedNode.getElementsByClassName('p-threads_footer__input_container');
    if (containers.length == 0)
        return;

    /// Add a short delay so that the sidebar has time to open.
    setTimeout(() => {
        Array.from(containers).forEach(container => {
            const editor = container.getElementsByClassName('ql-editor')[0];
            if (editor === undefined)
            {
                // console.log("SASTCDO: Unable to find editor");
                return;
            }
            const checkbox = container.getElementsByClassName('c-input_checkbox')[0];
            if (checkbox === undefined)
            {
                // console.log("SASTCDO: Unable to find checkbox");
                return;
            }

            const checkCheckbox = () => {
                // console.log("SASTCDO: Checking checkbox");
                if (!checkbox.checked) {
                    checkbox.click();
                    // console.log("SASTCDO: checked");
                }
            };

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
    }, 200);
});
