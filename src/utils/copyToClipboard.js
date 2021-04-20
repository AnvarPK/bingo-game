export const copyToClipboard = (targetEl) => {
    targetEl.select();
    targetEl.setSelectionRange(0, 99999); 
    document.execCommand("copy");
}