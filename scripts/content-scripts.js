document.addEventListener('keyup', function(e) {
    if (e.target.classList.contains('public-DraftEditor-content')) {
        let text = e.target.innerText || '';
        chrome.storage.local.set({text}, function() {
            navigator.clipboard.writeText(text);
        });
    }
});