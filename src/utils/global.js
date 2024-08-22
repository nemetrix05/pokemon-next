const fetcherApi = (...args) => fetch(...args).then(res => res.json());

export default fetcherApi;