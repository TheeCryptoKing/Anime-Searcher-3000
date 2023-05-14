# Anime-Searcher-3000
Search and Sort through any Anime and Create a favorites list 
| API Route                                       | Request Method | Body              | Response                 |
|-------------------------------------------------|----------------|-------------------|--------------------------|
| /allanime                                       | GET            |                   | [{...},{...},...]        |
| /favorites                                      | GET            |                   | [{...},{...},...]        |
| /favorites                                      | POST           | [{...},{...},...] | [{anime info},{...},...] |
| /favorites/:id                                  | DELETE         |                   | {}                       |
| /allanime?_sort=(rank)&_order=desc&_limit=10    | GET            |                   | {top 10 ranked animes}   |
| /allanime?_sort=(release)&_order=desc&_limit=10 | GET            |                   | {10 latest releases}     |
|                                                 |                |                   |                          |
|                                                 |                |                   |                          |
