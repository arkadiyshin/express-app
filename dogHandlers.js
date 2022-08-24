import dogs, { LIMIT_DEFAULT, LIST_OF_FILTERS } from './data.js';



const filterDogs = (query) => {

    const validFilters = Object.entries(query).filter(filter => LIST_OF_FILTERS.includes(filter[0]));

    return dogs.filter(element => {
        return validFilters.reduce((result, filter) => {
            return result && element[filter[0]] != undefined && element[filter[0]].toUpperCase().includes(filter[1].toUpperCase());
        }, true);
    });
}

const getLimits = (query) => {

    let limit = LIMIT_DEFAULT;
    let page = 0;

    if (query.limit) {
        const queryLimit = parseInt(query.limit);
        if (Number.isInteger(queryLimit)) limit = queryLimit;
    }

    if (query.page) {
        const queryPage = parseInt(query.page);
        if (Number.isInteger(queryPage)) page = queryPage;
    }

    const start = page * limit;
    const end = start + limit;

    return { start, end };

}

/* handlers */

const getWelcomePage = (req, res) => {
    let text = `<h1>The Dogs API </h1> 
    <h2>base url: http://localhost:5000/api/</h2>
    <ul> <strong>USER ENDPOINTS</strong>
        <li>GET /dogs    - Return list of dogs</li>
        <li>GET /dogs/id - Return dog by id</li>
    </ul>

    <ul> <strong>PARAMS</strong>
        <li>limit - [optional]number of results to return (default value ${LIMIT_DEFAULT})</li>
        <li>page  - [optional] paginate through results</li>
    </ul>

    <ul> <strong>FILTERS</strong>`
    text = LIST_OF_FILTERS.reduce((text, filter) => {
        return text += `<li> ${filter} </li>`;
    }, text);
    text += `</ul>`;
    res.send(text);
};

const getDogs = (req, res) => {

    const filteredArray = filterDogs(req.query);

    const { start, end } = getLimits(req.query);

    res.status(200).json(filteredArray.slice(start, end));

}

const getDogById = (req, res) => {
    const id = parseInt(req.params.id);
    const dogById = dogs.find((item) => item.id === id);
    res.status(200).json(dogById);
}



export default { getWelcomePage, getDogs, getDogById };