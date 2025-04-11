document.getElementById('subscribeBtn').addEventListener('click', function() {
    document.getElementById('subscriptionForm').classList.remove('hidden');
});

document.getElementById('subscriptionFormDetails').addEventListener('submit', function(event) {
    event.preventDefault(); // „‰⁄ ≈⁄«œ…  Õ„Ì· «·’›Õ…

    // «·Õ’Ê· ⁄·Ï «·»Ì«‰«  «·„œŒ·…
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const receipt = document.getElementById('receipt').files[0];

    //  Õﬁﬁ „‰ —›⁄ ’Ê—… «·Ê’·
    if (receipt) {
        // ›Ì Â–Â «·„—Õ·… Ì„ﬂ‰ﬂ ≈÷«›… «·ﬂÊœ ·„⁄«·Ã… «·’Ê—… √Ê ≈—”«· «·»Ì«‰«  ≈·Ï «·Œ«œ„
        document.getElementById('subscriptionForm').classList.add('hidden');
        document.getElementById('confirmationMessage').classList.remove('hidden');
    } else {
        alert('Ì—ÃÏ —›⁄ ’Ê—… «·Ê’·.');
    }
});
