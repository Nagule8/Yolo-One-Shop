import http from "../http-common";

class UserActivityDataService{
    getAll(userId){
        return http.get(`/UserActivities`, { withCredentials: true });
    }
    get(id){
        return http.get(`/UserActivities/${id}`, { withCredentials: true });
    }
}

export default new UserActivityDataService();