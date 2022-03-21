import api from "./api";

export async function getOrphanages() {
    return api.get('/orphanages');
}