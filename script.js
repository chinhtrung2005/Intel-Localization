/**
 * Intel Localization - Arabic Only Version
 */

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggleLang');
  if (toggleButton) {
    toggleButton.addEventListener('click', toggleLanguage);
  }
  
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', handleFormSubmit);
  }
});

function toggleLanguage() {
  // Language toggle disabled - Arabic only version
  console.log('Arabic only version - language switching disabled');
}

function handleFormSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const emailInput = document.getElementById('emailInput');
  const successMessage = document.getElementById('successMessage');
  const submitButton = form.querySelector('.btn-subscribe');
  
  if (!emailInput.value.trim()) {
    emailInput.focus();
    return;
  }
  
  const formData = {
    email: emailInput.value.trim(),
    language: 'ar',
    timestamp: new Date().toISOString()
  };
  
  console.log('Newsletter subscription:', formData);
  
  submitButton.disabled = true;
  submitButton.textContent = 'جاري الاشتراك...';
  
  setTimeout(() => {
    successMessage.style.display = 'flex';
    successMessage.setAttribute('role', 'alert');
    
    form.reset();
    submitButton.disabled = false;
    submitButton.textContent = 'اشترك';
    
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 5000);
  }, 1000);
}
