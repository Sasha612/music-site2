// Регистрация и вход
function register() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (user && pass) {
    localStorage.setItem(user, pass);
    document.getElementById('message').textContent = 'Регистрация успешна!';
  } else {
    document.getElementById('message').textContent = 'Введите данные.';
  }
}

function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const storedPass = localStorage.getItem(user);

  if (pass === storedPass) {
    localStorage.setItem('currentUser', user);
    window.location.href = 'home.html';
  } else {
    document.getElementById('message').textContent = 'Неверные данные.';
  }
}

// Страница рекомендаций
function recommend() {
  const genre = document.getElementById('genre').value;
  const mood = document.getElementById('mood').value;
  const recommendations = document.getElementById('recommendations');

  const music = {
    "Поп": {
      "Весёлое": ["Dua Lipa – Levitating", "Harry Styles – As It Was"],
      "Грустное": ["Billie Eilish – Everything I Wanted"],
      "Спокойное": ["Adele – Easy On Me"],
      "Энергичное": ["Katy Perry – Firework"]
    },
    "Рок": {
      "Весёлое": ["Imagine Dragons – On Top of the World"],
      "Грустное": ["Nirvana – Something in the Way"],
      "Спокойное": ["Radiohead – High and Dry"],
      "Энергичное": ["AC/DC – Thunderstruck"]
    },
    // ... другие жанры
  };

  const list = music[genre][mood] || ["Нет рекомендаций"];

  recommendations.innerHTML = `<h4>Рекомендации:</h4><ul>${list.map(track => `<li>${track}</li>`).join('')}</ul>`;
}

window.onload = function () {
  if (document.getElementById('user-name')) {
    const user = localStorage.getItem('currentUser');
    document.getElementById('user-name').textContent = user || 'Гость';
  }
};
