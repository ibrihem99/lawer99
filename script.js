document.getElementById('subscribeBtn').addEventListener('click', function() {
    document.getElementById('subscriptionForm').classList.remove('hidden');
});

document.getElementById('subscriptionFormDetails').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    // الحصول على البيانات المدخلة
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const receipt = document.getElementById('receipt').files[0];

    // تحقق من رفع صورة الوصل
    if (receipt) {
        // في هذه المرحلة يمكنك إضافة الكود لمعالجة الصورة أو إرسال البيانات إلى الخادم
        document.getElementById('subscriptionForm').classList.add('hidden');
        document.getElementById('confirmationMessage').classList.remove('hidden');
    } else {
        alert('يرجى رفع صورة الوصل.');
    }
});
