import api from "./api";

export async function getOrphanages() {
    return api.get('/orphanages');
}

export async function getOrphanageById(orphanageId: number){
    return api.get(`/orphanages/${orphanageId}`)
}