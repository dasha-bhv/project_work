const axios = require('../settings/axios_http');

const Spaces = {
    addSpace: (space) => axios.post('/spaces', space),
    getSpace: (spaceId) => axios.get(`/spaces/${spaceId}`),
    getSpaces: () => axios.get('/spaces/'),
    update: (spaceId, exId) => axios.patch(`/spaces/${spaceId}`, exId),
    removeSpace: (spaceId) => axios.delete(`spaces/${spaceId}`),
    addBoard: (spaceId, board) => axios.post(`spaces/${spaceId}/boards`, board),
    getBoard: (spaceId, id) => axios.get(`/spaces/${spaceId}/boards/${id}`),
};

module.exports = Spaces;
