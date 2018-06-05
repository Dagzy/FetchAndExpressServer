const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const key = "b774df187bef41be809f1d6cad5474c5";
let url;

//Search form DOM elements
const searchTerm = document.querySelector(".search");
const startDate = document.querySelector(".start-date");
const endDate = document.querySelector(".end-date");
const searchForm = document.querySelector("form");
const submitBtn = document.querySelector(".submit");

//Results navigation
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".prev");
const nav = document.querySelector("nav");

//Results section
const section = document.querySelector("section");

//To keep from having pagination issues later
nav.style.display = "none";
let pageNumber = 0;
console.log("PageNumber:", pageNumber);
let displayNav = false;

//Event listeners
searchForm.addEventListener("submit", fetchResults);
nextBtn.addEventListener("click", nextPage);
previousBtn.addEventListener("click", previousPage);

//Fetching Results
function fetchResults(e) {
    e.preventDefault();
    url = baseURL + "?api-key=" + key + "&page=" + pageNumber + "&q=" + searchTerm.value;
    console.log("URL:", url);

    if (startDate.value !== "") {
        url += "&begin_date=" + startDate.value;
    }
    if (endDate.value !== "") {
        url += "&end_date=" + endDate.value;
    }

    fetch(url)
        .then(function (result) {
            return result.json();
        })
        .then(function (json) {
            displayResults(json);
        });
}

function displayResults(result) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    console.log(result)
    let articles = result.response.docs;

    if (articles.length === 10 || (articles.length < 10 && pageNumber !== 0)) {
        nav.style.display = "block";
        if (articles.length < 10) {
            console.log('this should work')
            nextBtn.style.display = "none";
        }
    } else if (articles.length === 10 && pageNumber === 0) {
        nav.style.display = "block";
        previousBtn.style.display = "none";
    } else {
        nav.style.display = "none";
    }

    if (articles.length === 0) {
        console.log("No results");
    } else {
        for (let i = 0; i < articles.length; i++) {
            let article = document.createElement("article");
            let heading = document.createElement("h2");
            let link = document.createElement("a");
            let img = document.createElement("img");
            let para = document.createElement("p");
            let clearfix = document.createElement("div");

            let current = articles[i];
            console.log("current:", current);

            link.href = current.web_url;
            link.textContent = current.headline.main;

            para.textContent = "Keywords: ";

            for (let j = 0; j < current.keywords.length; j++) {
                let span = document.createElement("span");
                span.textContent += current.keywords[j].value + " ";
                para.appendChild(span);
            }

            if (current.multimedia.length > 0) {
                img.src = "http://www.nytimes.com/" + current.multimedia[0].url;
                img.alt = current.headline.main;
            }

            clearfix.setAttribute("class", "clearfix");

            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    }
}

function nextPage(e) {
    pageNumber++;
    fetchResults(e);
}

function previousPage(e) {
    if (pageNumber > 0) {
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
}