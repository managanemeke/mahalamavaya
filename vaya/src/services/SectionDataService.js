import http from "../http-common";
class SectionDataService {
  getAll() {
    return http.get("/sections");
  }
  get(id) {
    return http.get(`/sections/${id}`);
  }
  create(data) {
    return http.post("/sections", data);
  }
  update(id, data) {
    return http.put(`/sections/${id}`, data);
  }
  delete(id) {
    return http.delete(`/sections/${id}`);
  }
  deleteAll() {
    return http.delete(`/sections`);
  }
  findByProviderId(provider_id) {
    return http.get(`/section/find?provider_id=${provider_id}`);
  }
}
export default new SectionDataService();