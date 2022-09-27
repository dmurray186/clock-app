

const date = new Date();
const currentTime = date.getHours();
console.log(currentTime)

if (currentTime >= 5 && currentTime < 12) {
  document.querySelector("html").className = "day"
  document.querySelector("#greeting").innerHTML = "Good Morning Dan, it's currently"
  } else if (currentTime >= 12 && currentTime < 18) {
    document.querySelector("html").className = "day"
    document.querySelector("#greeting").innerHTML = "Good Afternoon Dan, it's currently"
  } else if (currentTime >= 18) {
    document.querySelector("html").className = "night"
    document.querySelector("#greeting").innerHTML = "Good Evening Dan, it's currently"
  } else if (currentTime >= 0 && currentTime < 5) {
    document.querySelector("html").className = "night"
    document.querySelector("#greeting").innerHTML = "Good Evening Dan, it's currently"
}


  async function getData() {
      let url = 'https://type.fit/api/quotes';
      try {
          let res = await fetch(url);
          return await res.json();
      } catch (error) {
          console.log(error);
      }
  }

  async function renderData() {
      let data = await getData();
      let num = Math.floor(Math.random() * 1644);

      console.log(data[num].author)
      console.log(data[num].text)

      let author = data[num].author
      let quote = data[num].text

      document.querySelector("#quote2").innerHTML = quote
      document.querySelector("#author2").innerHTML = "-" + author
  }

  renderData();
