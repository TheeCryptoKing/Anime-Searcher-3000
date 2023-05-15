# Anime-Searcher-3000
Search and Sort through any Anime and Create a favorites list 

<h1><a href="https://www.figma.com/file/yWi9Weab80EIjEPj3xIUoM/Anime-Searcher-3000?type=design&node-id=0%3A1&t=gRvf5SVk1gQoB5lA-1">WireFrames</a></h1>

<img src=''/>

<img src=''/>

<img src=''/>

<img src=''/>

<img src='https://raw.githubusercontent.com/TheeCryptoKing/Anime-Searcher-3000/main/.github/images/5th%20Wireframe.JPG'/>





# API Routes

| API Route                                       | Request Method | Body              | Response                             |
|-------------------------------------------------|----------------|-------------------|--------------------------------------|
| /topTen                                         | GET            |                   | [{...},{...},...]                    |
| /TenNew                                         | GET            |                   | [{...},{...},...]                    |
| /search                                         | GET            |                   | [{...},{...},...]                    |
| /favorites                                      | GET            |                   | [{...},{...},...]                    |
| /favorites                                      | POST           | [{...},{...},...] | [{anime info},{...},...]             |
| /favorites/:id                                  | DELETE         |                   | {}                                   |
| /allanime?_sort=(release)&_order=desc&_limit=10 | GET            |                   | {10 latest releases}                 |
| /fanfics                                        | GET            |                   | {{...},{...},...]                    |
| /fanfics                                        | POST           | {name, ...}       | {name, genre, image, creator, title} |


# Client Routes

| Client Route           | Component        |
|------------------------|------------------|
| /                      | Home.js          |
| /favorites             | Favorites.js     |
| /search                | Search.js        |
| /fanfics               | Fanfics.js       |
| /:id                   | DisplayAnime.js  |

# React Tree

<img src='https://github.com/TheeCryptoKing/Anime-Searcher-3000/assets/129634839/a9254ea6-8183-44a6-af58-c18710c114db' width='1000px'/>

# Trello 

<img src='https://github.com/TheeCryptoKing/Anime-Searcher-3000/blob/main/.github/images/Anime-Searcher-3000.JPG'/>


