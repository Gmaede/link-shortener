document.getElementById('urlForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const longUrl = document.getElementById('longUrl').value;
  const shortCode = generateShortCode();

  localStorage.setItem(shortCode, longUrl);

  const shortUrl = `${window.location.href}${shortCode}`;
  document.getElementById('shortUrl').innerText = `Short URL: ${shortUrl}`;
  document.getElementById('copyButton').style.display = 'block';
  document.getElementById('copyButton').onclick = function() {
    navigator.clipboard.writeText(shortUrl);
  };
});

function generateShortCode() {
  return Math.random().toString(36).substring(2, 8);
}

window.addEventListener('load', function() {
  const path = window.location.pathname.substring(1);
  if (path) {
    const longUrl = localStorage.getItem(path);
    if (longUrl) {
      window.location.href = longUrl;
    }
  }
});
