const qs = (s, el=document) => el.querySelector(s);

const brandShell = (active='home', content='') => `
  <div class="page">
    <div class="container">
      <header class="topbar">
        <div class="brandbar">
          <div class="logo-box">BC</div>
          <div class="brand-copy">
            <h1>براتشو <span>كار</span></h1>
            <div class="en">Bratsho Car</div>
            <p>سوق سيارات وقطع غيار وخدمات متنقلة بتصميم مرتب وسريع</p>
          </div>
          <a class="icon-btn" href="settings.html" aria-label="الإعدادات">⚙️</a>
        </div>
        <div class="quick-actions">
          <a class="quick-card" href="favorites.html"><span class="icon">♥</span><span>المفضلة</span></a>
          <a class="quick-card" href="account.html"><span class="icon">👤</span><span>حسابي</span></a>
          <a class="quick-card primary" href="add.html"><span class="icon">＋</span><span>أضف إعلان</span></a>
          <a class="quick-card" href="messages.html"><span class="icon">💬</span><span>دردشاتي</span></a>
        </div>
      </header>
      ${content}
    </div>
    <nav class="bottom-nav">
      <a class="${active==='account'?'active':''}" href="account.html">حسابي</a>
      <a class="${active==='myads'?'active':''}" href="my-ads.html">إعلاناتي</a>
      <a class="center ${active==='add'?'active':''}" href="add.html">أضف إعلان</a>
      <a class="${active==='messages'?'active':''}" href="messages.html">دردشاتي</a>
      <a class="${active==='home'?'active':''}" href="index.html">الرئيسية</a>
    </nav>
  </div>
`;

const listingCard = (item) => `
  <article class="card">
    <a class="card-media" href="details.html">
      <img src="${item.image}" alt="${item.title}">
      <span class="badge">${item.type}</span>
      <button class="fav-btn" type="button">♡</button>
    </a>
    <div class="card-body">
      <div class="price">${item.price}</div>
      <h3 class="title">${item.title}</h3>
      <p class="desc">${item.desc}</p>
      <div class="pills">
        <span class="pill">${item.city}</span>
        <span class="pill">${item.year}</span>
        <span class="pill">${item.meta}</span>
      </div>
      <div class="card-actions">
        <a class="btn btn-primary" href="details.html">عرض</a>
        <a class="btn btn-soft" href="#">واتساب</a>
        <a class="btn btn-soft" href="#">☎</a>
      </div>
    </div>
  </article>
`;

const demoItems = [
  {
    image:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    type:'سيارة',
    price:'37,500 د.ل',
    title:'هيونداي سوناتا 2016 فل رقم 1',
    desc:'بوش أصلي، صالون ممتاز، جاهزة بدون مصاريف.',
    city:'طرابلس',
    year:'2016',
    meta:'95,000 كم'
  },
  {
    image:'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80',
    type:'قطعة غيار',
    price:'4,500 د.ل',
    title:'كمبيو كيا أوبتيما 2014',
    desc:'كمبيو نظيف ومجرب ومناسب لعدة فئات.',
    city:'مصراتة',
    year:'2014',
    meta:'قطعة مستعملة'
  }
];

export { qs, brandShell, listingCard, demoItems };
