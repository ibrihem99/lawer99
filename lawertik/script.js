document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("subscriptionForm");
  const confirmationMessage = document.getElementById("confirmationMessage");
  
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    // هنا يمكن إضافة منطق لإرسال البيانات إلى خادم أو قاعدة بيانات
    confirmationMessage.classList.remove("hidden");
    form.reset();
  });
});