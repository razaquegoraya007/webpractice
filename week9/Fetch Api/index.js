const container  =  document.getElementById('container')
let posts = [];
function getThePosts(){
    fetch('https://jsonplaceholder.org/posts/').then(apiResult=> apiResult.json()).then( data=> {
        posts = data;
        posts.forEach(element => {
            
            container.innerHTML+= `<div class="card">
            <div>
                title : ${element.title}
            </div>
            <div>
                Slug :  ${element.slug}
            </div>
            <a href="https://jsonplaceholder.org/posts/${element.id}">
         View
            </a>
    
        </div>` 
        });
    })
}
getThePosts()