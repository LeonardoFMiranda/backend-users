import exp from "constants";
import { Router , Response,Request,NextFunction } from "express";
import userRepository from "../repositories/user.repository";



const usersRoute = Router()

usersRoute.get('/users', async (req: Request,res: Response,next:NextFunction)=>{
    const users = await userRepository.findAllUsers()
    res.status(200).send(users)
})

usersRoute.get('/users/:uuid',async (req: Request <{ uuid  : string}>,res: Response,next:NextFunction)=>{
    const uuid = req.params.uuid
    const user = await userRepository.findById(uuid)
    res.status(200).send(user)
})

usersRoute.post('/users',async (req: Request,res: Response,next:NextFunction)=>{
    const newUser = req.body
    const uuid = await userRepository.create(newUser)
    res.status(201).send(uuid)
})

usersRoute.put('/users/:uuid', async (req: Request <{ uuid  : string}>,res: Response,next:NextFunction)=>{
    const uuid = req.params.uuid
    const modifiedUser = req.body
    modifiedUser.uuid = uuid

    await userRepository.update(modifiedUser)
    res.status(200).send()
})

usersRoute.delete('/users/:uuid', async (req: Request <{ uuid  : string}>,res: Response,next:NextFunction)=>{
    const uuid = req.params.uuid
    await userRepository.remove(uuid)
    res.status(200).json({ message: 'Deletado com sucesso' });
})

export default usersRoute