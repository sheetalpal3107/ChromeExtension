// public/content.js

let lastScrollTop = 0;

function handleScroll() {
  const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    console.log('User has scrolled down');
  } else {
    console.log('User has scrolled up');
  }

  lastScrollTop = currentScrollTop;
}

function readUsername() {
  const tweets = document.querySelectorAll('[data-testid="tweet"]');
  tweets.forEach((tweet) => {
    const usernameElement = tweet.querySelector('[data-testid="tweet-username"]');
    const username = usernameElement && usernameElement.textContent.trim();
    if (username) {
      console.log('Username:', username);
    }
  });
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'startScrollLogger') {
    window.addEventListener('scroll', handleScroll);
    setInterval(readUsername, 1000); // Adjust the interval as needed
  }
});
