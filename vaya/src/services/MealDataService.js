import http from "../http-common";
class MealDataService {
  getAll() {
    return http.get("/meals");
  }
  get(id) {
    return http.get(`/meals/${id}`);
  }
  create(data) {
    return http.post("/meals", data);
  }
  update(id, data) {
    return http.put(`/meals/${id}`, data);
  }
  delete(id) {
    return http.delete(`/meals/${id}`);
  }
  deleteAll() {
    return http.delete(`/meals`);
  }
  findBySectionId(section_id) {
    return http.get(`/meal/find?section_id=${section_id}`);
  }
}
export default new MealDataService();