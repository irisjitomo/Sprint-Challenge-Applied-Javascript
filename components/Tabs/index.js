// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsClass  = document.querySelector('.topics');

// axios.get('https://lambda-times-backend.herokuapp.com/topics')



// topicsArray.forEach(response => {
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    console.log(response.data.topics)
    // let topicsArray = response.data;
    // topicsArray.forEach(response => {})
    let topics = response.data.topics
    topics.forEach(x => {
        topicsClass.appendChild(topicsTab(x))
        // console.log(x)
    })
    
})
// })

function topicsTab(topic){
    const tabs = document.createElement('div');
    tabs.classList.add('tab');
    tabs.textContent = topic


    return tabs
} 


