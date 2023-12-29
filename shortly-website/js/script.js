const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errorMessage = document.getElementById('error-message');

linkForm.addEventListener('submit', formSubmit);

// Validate a URL
function validateUrl(str) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // Protocol
      '((([a-z\\d]([a-z\\d]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );

  return !!pattern.test(str);
}

function formSubmit(event) {
  event.preventDefault();

  if (input.value === '' || !validateUrl(input.value)) {
    errorMessage.innerHTML = 'Please enter a valid url';
    input.classList.add('border-red');
  } else {
    errorMessage.innerHTML = '';
    input.classList.remove('border-red');
    alert('Success');
  }
}
