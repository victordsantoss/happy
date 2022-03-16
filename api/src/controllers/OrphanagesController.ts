import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import Orphanage from '../models/Orphanage';

export default {

    async index(req: Request, res: Response) {
        const orphanagesRepository = getRepository(Orphanage);
        const orphanages = await orphanagesRepository.find();

        return res.status(200).json(orphanages);
    },
    async create(req: Request, res: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = req.body;

        const orphanagesRepository = getRepository(Orphanage);

        const requestImages = req.files as Express.Multer.File[];

        const images = requestImages.map(image =>{
            return {
                path: image.filename,
            }
        })

        const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images,
        };

        const orphanage = orphanagesRepository.create(data);

        await orphanagesRepository.save(orphanage);
        return res.status(201).json(orphanage)
    },
    async show(req: Request, res: Response) {
        const {
            id
        } = req.params;

        const orphanagesRepository = getRepository(Orphanage);
        const orphanage = await orphanagesRepository.findOneOrFail(id);

        return res.status(200).json(orphanage)
    },
    

}