import Users from './users.service';

const api = () => ({
  Users: () => ({ ...Users }),
});

export default api;
