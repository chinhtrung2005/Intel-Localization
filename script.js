/*
 * Enhanced scripts: language auto-detect (RTL/LTR), accessible form handling,
 * and dynamic modal for the pillar "Learn More" links.
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize form handling
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) newsletterForm.addEventListener('submit', handleFormSubmit);

  // Delegate clicks for learn-more links to open modal
  document.body.addEventListener('click', function(e) {
    const target = e.target.closest && e.target.closest('.learn-more');
    if (target) {
      e.preventDefault();
      openPillarModal(target.dataset.pillar || 'default');
    }
  });

  // Observe language changes on the <html> element (e.g., Google Translate)
  const htmlEl = document.documentElement;
  const observer = new MutationObserver(mutations => {
    for (const m of mutations) {
      if (m.type === 'attributes' && m.attributeName === 'lang') {
        applyDirectionFromLang(htmlEl.getAttribute('lang'));
      }
    }
  });
  observer.observe(htmlEl, { attributes: true });

  // Apply initial direction based on current lang
  applyDirectionFromLang(document.documentElement.getAttribute('lang'));
});

function isRtlLang(lang) {
  if (!lang) return false;
  const code = lang.split('-')[0].toLowerCase();
  const rtl = ['ar','he','fa','ur','ps','syr','dv'];
  return rtl.includes(code);
}

function applyDirectionFromLang(lang) {
  const htmlEl = document.documentElement;
  const shouldBeRtl = isRtlLang(lang);
  htmlEl.dir = shouldBeRtl ? 'rtl' : 'ltr';

  // Toggle Bootstrap LTR/RTL stylesheet links (they are in the head with ids)
  const ltrLink = document.getElementById('bootstrap-ltr');
  const rtlLink = document.getElementById('bootstrap-rtl');
  if (ltrLink && rtlLink) {
    ltrLink.disabled = shouldBeRtl;
    rtlLink.disabled = !shouldBeRtl;
  }
}

function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const emailInput = document.getElementById('emailInput');
  const emailError = document.getElementById('emailError');
  const successMessage = document.getElementById('successMessage');
  const submitButton = form.querySelector('.btn-subscribe');

  // Basic email validation
  const email = (emailInput.value || '').trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    emailError.style.display = 'block';
    emailError.textContent = 'الرجاء إدخال عنوان بريد إلكتروني صالح.';
    emailInput.setAttribute('aria-invalid', 'true');
    emailInput.focus();
    return;
  }
  if (!emailRegex.test(email)) {
    emailError.style.display = 'block';
    emailError.textContent = 'الرجاء إدخال بريد إلكتروني بتنسيق صحيح.';
    emailInput.setAttribute('aria-invalid', 'true');
    emailInput.focus();
    return;
  }

  // Clear any previous error
  emailError.style.display = 'none';
  emailInput.removeAttribute('aria-invalid');

  // Simulate async subscribe
  submitButton.disabled = true;
  submitButton.textContent = 'جاري الاشتراك...';

  setTimeout(() => {
    if (successMessage) {
      successMessage.style.display = 'flex';
      successMessage.setAttribute('role', 'status');
      successMessage.setAttribute('aria-live', 'polite');
    }
    form.reset();
    submitButton.disabled = false;
    submitButton.textContent = 'اشترك';

    setTimeout(() => {
      if (successMessage) successMessage.style.display = 'none';
    }, 4500);
  }, 900);
}

function openPillarModal(pillarKey) {
  const mapping = {
    innovation: {
      title: 'الابتكار',
      body: 'تعزيز الاختراقات التكنولوجية التي تقلل استهلاك الطاقة وتمكّن حلولاً أكثر استدامة.'
    },
    renewable: {
      title: 'الطاقة المتجددة',
      body: 'الالتزام بمصادر طاقة متجددة لتقليل البصمة الكربونية عبر العمليات العالمية.'
    },
    manufacturing: {
      title: 'التصنيع المسؤول',
      body: 'تقليل النفايات واستخدام المياه والانبعاثات الكيميائية من خلال ممارسات تصنيع أفضل.'
    },
    default: {
      title: 'تفاصيل',
      body: 'يمكنك العثور على معلومات أكثر حول هذا العمود من خلال زيارة صفحة الموارد الخاصة بنا.'
    }
  };

  const data = mapping[pillarKey] || mapping.default;
  const modalTitle = document.getElementById('pillarModalLabel');
  const modalContent = document.getElementById('pillarModalContent');
  if (modalTitle) modalTitle.textContent = data.title;
  if (modalContent) modalContent.textContent = data.body;

  const modalEl = document.getElementById('pillarModal');
  if (modalEl && typeof bootstrap !== 'undefined') {
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }
}
