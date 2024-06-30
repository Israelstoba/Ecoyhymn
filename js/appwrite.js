//////Appwrite Initializing///////
// Initialize Appwrite
const client = new Appwrite.Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
  .setProject('ecoy-hymnal-app'); // Your project ID

const databases = new Appwrite.Databases(client);
const databaseId = '666d32170034dfab161c';
const collectionId = '666d330500277a5cab2c';

// Function to fetch and display hymn titles
function fetchHymnTitles() {
  databases
    .listDocuments(databaseId, collectionId)
    .then((response) => {
      const hymnList = document.getElementById('hymn-list');
      hymnList.innerHTML = ''; // Clear the current list
      response.documents.forEach((hymn) => {
        const hymnItems = document.createElement('li');
        hymnItems.classList.add('list-items');
        hymnItems.textContent = hymn.title;
        hymnItems.dataset.id = hymn.$id;
        hymnItems.onclick = () => fetchHymnDetails(hymn.$id);
        hymnList.appendChild(hymnItems);
      });
    })
    .catch((error) => {
      console.error('Error fetching hymn titles:', error);
    });
}

// Function to fetch and display hymn details
function fetchHymnDetails(hymnId) {
  databases
    .getDocument(databaseId, collectionId, hymnId)
    .then((hymn) => {
      document.getElementById('hymn-title').innerText = hymn.title;
      document.getElementById('hymn-lyrics').innerText = hymn.lyrics;
    })
    .catch((error) => {
      console.error('Error fetching hymn details:', error);
    });
}

// Fetch hymn titles on page load
fetchHymnTitles();
