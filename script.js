* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 90px; /* Отступ сверху при скролле к якорю, чтобы шапка не перекрывала заголовки */
}

body {
    background: #000;
    color: #fff;
    overflow-x: hidden;
}

.container {
    width: min(1200px, 92%);
    margin: auto;
}

.section {
    padding: 120px 0;
}

/* HERO теперь компактный */
.hero {
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 40px;
}

.hero.compact {
    padding-top: 110px; /* Корректировка отступа из-за фиксированной шапки */
}

/* Уменьшаем заголовок */
h1 {
    font-size: 90px;
    letter-spacing: -4px;
}

@media(max-width: 900px) {
    h1 { font-size: 54px; }
    .hero { height: 55vh; }
}

/* Подсказка вниз */
.hint {
    text-align: center;
    color: #666;
    margin-top: -20px;
    margin-bottom: 40px;
    font-size: 14px;
    letter-spacing: 2px;
    opacity: .7;
}

p {
    color: #aaa;
    margin-top: 20px;
    font-size: 18px;
}

.scroll {
    margin-top: 50px;
    opacity: .5;
    letter-spacing: 3px;
}

h2 {
    font-size: 48px;
    margin-bottom: 40px;
}

/* Сетки для видео */
.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.long-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.card {
    background: #111;
    border: 1px solid rgba(255, 255, 255, .08);
    border-radius: 24px;
    overflow: hidden;
    transition: .35s ease;
}

.card:hover {
    transform: translateY(-6px);
    border-color: rgba(255, 255, 255, .18);
    box-shadow: 0 20px 60px rgba(255, 255, 255, .06);
}

/* НАСТРОЙКА ВИДЕОПЛЕЕРОВ */

/* 1. Короткий формат (Обычный режим в карточке) */
.grid .card video {
    width: 100%;
    aspect-ratio: 9/16;
    object-fit: cover; /* Растягивается и заполняет всю карточку без полей */
    background: #000;
    display: block;
}

/* Короткий формат (Полноэкранный режим — возвращаем оригинал) */
.grid .card video:fullscreen {
    object-fit: contain; /* Видео не обрезается при раскрытии */
}
.grid .card video:-webkit-full-screen {
    object-fit: contain; /* Для Safari и iOS */
}

/* 2. Длинный формат (Горизонтальные видео на сайте) */
.long-grid .card video {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: contain;
    background: #000;
    display: block;
}

.card-content {
    padding: 15px;
}

.card-content h3 {
    font-size: 18px;
    font-weight: 600;
}

/* Кнопки и анимации появления */
.cta {
    display: inline-block;
    margin-top: 30px;
    padding: 15px 35px;
    background: #fff;
    color: #000;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 600;
    transition: opacity 0.3s ease;
}

.cta:hover {
    opacity: 0.9;
}

.fade {
    opacity: 0;
    transform: translateY(40px);
    transition: 1s;
}

.fade.show {
    opacity: 1;
    transform: none;
}

/* ФОНОВЫЕ СВЕТЯЩИЕСЯ КРУГИ */
.bg-shapes {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    pointer-events: none;
    background: #000;
}

.shape {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.25;
    will-change: transform;
}

.shape-1 {
    top: -5%;
    left: -5%;
    width: 400px;
    height: 400px;
    background: #3b82f6;
}

.shape-2 {
    top: 30%;
    right: -5%;
    width: 500px;
    height: 500px;
    background: #8b5cf6;
}

/* БЛОК "ОБО МНЕ" */
.about-card {
    background: #111;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 32px;
    padding: 60px;
    display: flex;
    gap: 50px;
    align-items: center;
    text-align: left;
}

.about-avatar {
    flex: 0 0 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.memoji-img {
    width: 100%;
    height: auto;
    object-fit: contain;
    opacity: 0;
    transform: scale(0.8) translateY(20px);
    transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.fade.show .memoji-img {
    opacity: 1;
    transform: scale(1) translateY(0);
    transition-delay: 0.2s;
}

.about-text {
    flex: 1;
}

.about-text h2 {
    margin-bottom: 20px;
}

.about-text p {
    margin-top: 0;
    margin-bottom: 16px;
    line-height: 1.6;
}

.about-text .intro {
    font-size: 22px;
    color: #fff;
}

.about-benefits p {
    font-size: 16px;
    color: #aaa;
}

.about-skills {
    list-style: none;
    padding: 0;
    margin: 24px 0;
}

.about-skills li {
    font-size: 16px;
    color: #fff;
    margin-bottom: 12px;
    font-weight: 600;
}

.about-text .features, 
.about-text .outro {
    font-size: 16px;
    color: #ccc;
}

.about-text .outro {
    font-weight: 600;
    color: #fff;
    margin-top: 20px;
}

/* ФИКСИРОВАННАЯ ШАПКА */
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.header-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.logo img {
    height: 35px;
    width: auto;
    display: block;
}

.nav {
    display: flex;
    gap: 30px;
}

.nav a {
    color: #aaa;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav a:hover {
    color: #fff;
}

.nav-cta {
    display: inline-block;
    padding: 10px 20px;
    background: #fff;
    color: #000;
    border-radius: 999px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    transition: opacity 0.3s ease;
}

.nav-cta:hover {
    opacity: 0.9;
}

/* ПОДВАЛ (FOOTER) */
.footer {
    padding: 80px 0 40px 0;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer p {
    font-size: 12px;
    color: #555;
    letter-spacing: 0.5px;
}

/* АДАПТИВНОСТЬ */
@media(max-width: 900px) {
    .about-card {
        flex-direction: column;
        padding: 30px 20px;
        gap: 30px;
        text-align: center;
    }
    .about-avatar {
        flex: 0 0 200px;
        width: 200px;
    }
    .about-skills {
        text-align: left;
        display: inline-block;
    }
    .grid {
        grid-template-columns: repeat(2, 1fr); /* По два видео в ряд на планшетах */
    }
}

@media (max-width: 768px) {
    .header-wrap {
        height: auto;
        padding: 15px 0;
        flex-direction: column;
        gap: 15px;
    }
    .nav {
        gap: 15px;
        flex-wrap: wrap;
        justify-content: center;
    }
    html {
        scroll-padding-top: 160px; /* Увеличиваем отступ, так как мобильная шапка выше */
    }
}

@media(max-width: 480px) {
    .grid, .long-grid {
        grid-template-columns: 1fr; /* По одному видео в ряд на смартфонах */
    }
}

/* Общий контейнер для двух блоков */
.reviews-wrapper {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 24px;
  margin-top: 30px;
}

/* Блок Kwork */
.kwork-box {
  background: linear-gradient(135deg, rgba(11, 218, 81, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(11, 218, 81, 0.2); /* Легкий зеленый оттенок в стиле Kwork */
  border-radius: 24px;
  padding: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(10px);
}

.kwork-badge {
  display: inline-block;
  align-self: flex-start;
  background: rgba(11, 218, 81, 0.15);
  color: #0bda51;
  padding: 6px 14px;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.kwork-box h3 {
  font-size: 1.6rem;
  margin-top: 0;
  margin-bottom: 12px;
}

.kwork-box p {
  color: #b0b0b0;
  line-height: 1.6;
  margin-bottom: 24px;
}

.kwork-benefits {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.kwork-benefit-item {
  font-size: 0.95rem;
  color: #e0e0e0;
  background: rgba(255, 255, 255, 0.03);
  padding: 8px 16px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.kwork-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #0bda51; /* Фирменный зеленый */
  color: #fff;
  padding: 16px 28px;
  border-radius: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.kwork-btn:hover {
  background: #09b843;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(11, 218, 81, 0.2);
}

.kwork-btn .arrow {
  transition: transform 0.3s ease;
}

.kwork-btn:hover .arrow {
  transform: translateX(5px);
}

/* Блок Telegram */
.tg-review-box {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(10px);
}

.tg-review-box h3 {
  font-size: 1.4rem;
  margin-top: 0;
  margin-bottom: 12px;
}

.tg-review-box p {
  color: #aaa;
  line-height: 1.5;
  font-size: 0.95rem;
  margin-bottom: 24px;
}

.tg-review-btn {
  display: inline-block;
  text-align: center;
  background: rgba(255, 255, 255, 0.07);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 16px 24px;
  border-radius: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.tg-review-btn:hover {
  background: #fff;
  color: #000;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.1);
}

/* Адаптивность для мобильных */
@media (max-width: 992px) {
  .reviews-wrapper {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
