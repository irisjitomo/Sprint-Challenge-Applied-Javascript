// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container')



axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(res => {
    console.log(res.data.articles);
    const articles = res.data.articles
    for(article in articles){
        console.log(article)
        console.log(articles[article])
        articles[article].forEach((x) => {
            console.log(x)
            cardsContainer.appendChild(createCard(x))
    })    
    } 
})



function createCard(obj){
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline')
    headline.textContent = obj.headline

    const author = document.createElement('div');
    author.classList.add('author')

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container')

    const img = document.createElement('img');
    img.src = obj.authorPhoto;

    const span = document.createElement('span');
    span.textContent = obj.authorName;



    cardDiv.append(headline);
    cardDiv.append(author);
    author.append(imgContainer);
    imgContainer.appendChild(img);
    author.append(span);


    return cardDiv
}

// {/* <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div> */}

