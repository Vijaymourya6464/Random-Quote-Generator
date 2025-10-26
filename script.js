   const quotes = [
      { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
      { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
      { text: "Do not watch the clock. Do what it does. Keep going.", author: "Sam Levenson" },
      { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
      { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
      { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
      { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
      { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
      { text: "Don’t count the days, make the days count.", author: "Muhammad Ali" }
    ];

    function generateQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const quote = quotes[randomIndex];
      document.getElementById("quote").textContent = `"${quote.text}"`;
      document.getElementById("author").textContent = `– ${quote.author}`;
    }