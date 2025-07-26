// ملف جافاسكريبت لموقع دخون
// يقوم بتحديث سنة حقوق الطبع والنشر ومعالجة إرسال نموذج الاتصال.

document.addEventListener('DOMContentLoaded', () => {
  // تحديث نص حقوق الطبع والنشر مع السنة الحالية
  const copyrightEl = document.getElementById('copyright');
  const year = new Date().getFullYear();
  copyrightEl.textContent = `حقوق الطبع والنشر © ${year} دخون. جميع الحقوق محفوظة.`;

  // اعتراض إرسال نموذج الاتصال وعرض رسالة شكر
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('شكراً لتواصلك معنا! سنقوم بالرد عليك قريباً.');
    form.reset();
  });
});