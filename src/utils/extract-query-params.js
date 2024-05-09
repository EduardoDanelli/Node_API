export function extractQueryParams(query){
    return query.substr(1).spliot('&').reduce((queryParams, param) => {
        const [key, value] = param.split('=')

        queryParams[key] = value

        return queryParams
    }, {})
}