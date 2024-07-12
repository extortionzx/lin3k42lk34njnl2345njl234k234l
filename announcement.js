const announcements = [
  {
    id: 1,
    image: "Roblox-Vega-X-Exploit-v2.1.8A-Fr.jpg",
    title: "Major Update: Roblox New Ban API",
    content: "As of July 7, 2024 Roblox have introduced the new Roblox 'Ban API and Alt Account Detection'. Here's the short summary of what this means f...",
    fullContent: "As of July 7, 2024, Roblox have introduced the new Roblox 'Ban API and Alt Account Detection'. This major update aims to enhance the security and integrity of the platform by detecting and banning alternate accounts more effectively. This change impacts both players and developers, making the gaming environment safer and more reliable. Stay tuned for more detailed updates and guides on how to adapt to these changes.",
    link: "#",
    major: true
  },
  {
    id: 2,
    image: "Roblox-Vega-X-Exploit-v2.1.8A-Fr.jpg",
    title: "???",
    content: "Whenever there's news about Roblox exploits or Roblox in general, or any news about our website, we'll be posted here!",
    fullContent: "Whenever there's news about Roblox exploits or Roblox in general, or any news about our website, we'll be posted here! Stay tuned for more updates and make sure to check back frequently to stay informed about the latest developments.",
    link: "#",
    major: false
  }
];

const newsContainer = document.getElementById('news-container');

announcements.forEach(announcement => {
  const newsItem = document.createElement('div');
  newsItem.classList.add('news-item');
  if (announcement.major) {
    newsItem.classList.add('major-news');
  }

  newsItem.innerHTML = `
    <img src="${announcement.image}" alt="${announcement.title}">
    <div class="news-content">
      <h2>${announcement.title}</h2>
      <p>${announcement.content} <a href="#" class="read-more" data-id="${announcement.id}">Read more</a></p>
    </div>
  `;

  newsContainer.appendChild(newsItem);
});

// Add event listener for "Read more" links
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('read-more')) {
    e.preventDefault();
    const id = e.target.getAttribute('data-id');
    const announcement = announcements.find(ann => ann.id == id);
    if (announcement) {
      const newWindow = window.open('', '_blank');
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
          <link rel="stylesheet" href="test.css">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
          <title>${announcement.title}</title>
        </head>
        <body>
          <div class="navbar" id="navbar">
            <a href="index.html">Products</a>
            <a href="scripts.html">Scripts</a>
            <a href="privacy.html">Privacy</a>
            <a href="test.html">Latest News</a>
          </div>

          <div class="news-container">
            <div class="news-item">
              <img src="${announcement.image}" alt="${announcement.title}">
              <div class="news-content">
                <h2>${announcement.title}</h2>
                <p>${announcement.fullContent}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `);
    }
  }
});
