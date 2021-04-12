# Simple Movie search app

## Roadmap

- [x] generate project (used `npx create-react-app movies-search --template must-have-libraries`)
- [x] research into API (used https://www.omdbapi.com/)
- [x] create base layout of landing page
- [x] create base layout of result list
- [x] search by movie title (happy flow)
- [x] search by movie year (happy flow)
- [x] add snapshot tests for dummy layout components
- [x] connect app with Rest API
- [x] add loading indicator
- [x] load poster on search page
- [x] make sure app has state saved in URL (copy/paste of URL would open same page)
- [ ] add pagination to list page (maybe with some infinite scroll. e.g. with ag-grid or similar https://www.ag-grid.com/javascript-grid/infinite-scrolling/)
- [ ] load movie plot on listing page (requires 1 request per each item in list)
- [ ] add "no results" info
- [ ] handle user mistakes and server errors (unhappy path). E.g. when user would type non existing movie title
- [ ] add movie details page
- [ ] add request caching
- [ ] add "I'm Feeling Lucky" function (would navigate to details page of first match, the is API for that on OMDB)
- [ ] add input autocomplete (e.g. https://select2.org/data-sources/ajax)
- [ ] add more tests
- [ ] refactor rest services - keep them separate from APP code
