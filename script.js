const generateBtn = document.querySelector('.generate-button');
const memeTitle = document.querySelector('.meme-title');
const memeImage = document.querySelector('.meme-image');
const authorOutput = document.querySelector('.author');

const url = "https://meme-api.com/gimme/wholesomememes";
function getMeme() {
    memeImage.src = "loadingScr.gif";
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.title && data.url && data.author) {
                memeTitle.textContent = data.title;
                memeImage.src = data.url;
                authorOutput.textContent = `Meme by: ${data.author}`;
            } else {
                throw new Error("Invalid API response");
            }
        })
        .catch(error => {
            memeTitle.textContent = "Error loading meme";
            memeImage.src = "";
            authorOutput.textContent = "";
            console.error("Error fetching meme:", error);
        });
}

getMeme();

generateBtn.addEventListener('click', getMeme);