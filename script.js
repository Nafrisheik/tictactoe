function changeContent() {
     var x = document.getElementById("options").value;
     console.log(x);
     const urlData = fetch(
       "https://api.nytimes.com/svc/topstories/v2/" +
         x +
         ".json?api-key=SUU6MbBAiu7yoWDIuu7XrsXVuCizdv4L"
     );
     urlData
       .then((value) => {
         return value.json();
       })
       .then((data) => {
         console.log(data);
         document.getElementById("section").innerText = data.results[0].section;
         document.getElementById("title").innerText = data.results[0].title;
         document.getElementById("type").innerText = data.results[0].item_type;
         document.getElementById("byLine").innerText = data.results[0].byline;
         document.getElementById("date").innerText = data.results[0].created_date;
         document.getElementById("abstract").innerText = data.results[0].abstract;
         document.getElementById("url").href = data.results[0].url;
         document.getElementById("url").innerText = data.results[0].url;
         document.getElementById("articleInline").src =
           data.results[0].multimedia[4].url;
       })
       .catch((error) => {
         console.log("error");
       });
   }
   
   changeContent();
   
   // document.getElementById('section').innerText=data.results[0].section;
   