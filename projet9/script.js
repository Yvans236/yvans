
let error = document.querySelector('.error_message');
let longLink = document.querySelector('.long_link');
let short = document.querySelector('.result');

function shortLinkFunct(){
    //verification input
    if(longLink.value.trim !== ""){
        //vider l'erreur
        error.innerHTML="";
        //connection API
        let url = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longLink.value)}`;

        fetch(url)
        .then(response => response.text())
        .then(data => {
          if (data.includes('http')) {
            short.innerHTML = data;
            short.style.display = "block";
          } else {
            short.innerHTML = "Invalid URL!";
            short.style.display = "block";
            console.error("API Error:", data);
          }
        })
        .catch(error => {
          short.innerHTML = "Request error!";
          short.style.display = "block";
          console.error("Fetch Error:", error);
        });
      } else {
        error.innerHTML = "Please fill in the field!";
      }
    }
    



