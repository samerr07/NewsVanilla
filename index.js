// Let us start our 3rd project, in which we will build the “News Website”. This website will use news API. The News API is a simple and easy-to-use API that returns JSON metadata for headlines and articles live all over the web right now. This website will show live news to the user, which will be displayed with the help of news API.

// To get the News API, follow the instructions:

// Click on https://newsapi.org/
// Click on “ Get API Key”
// Register for API Key




// yha pr NEWS API google pr search kr lo to kafi milega
//api key generate kr skte ho joki kr lya h mne
console.log("This is my index js file");

// Initialize the news api parameters
let source = 'the-times-of-india';
let apiKey = '86cbc37f87754046a6a07cb06f9e5a0f'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=86cbc37f87754046a6a07cb06f9e5a0f`, true);
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
    
        articles.forEach(function(element,index) {
            // console.log(element, index)
            let news = `<div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
            <b>Breaking News ${index+1}:</b> ${element['title']}
            </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
            <div class="accordion-body">
                <strong>${element['content']}</strong> <a href="${element['url']}" target="_blank" >Read more here</a>
            </div>
            </div>
            </div>`
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()




