import { Request, Response } from "express"
import { userModel } from '../model/userModel'

export const userController = {
    getAllUsers: async(req: Request,res: Response): Promise<void> =>{
        try {
           const users = await userModel.selectAllUsers()
     
           if(!users.length){
              res.statusCode = 404
              throw new Error("No recipes found")
           }
     
           res.status(200).send(users)
           
        } catch (error) {
           console.log(error)
           res.send(error.message || error.sqlMessage)
        }
     },
     getUsersByName: async(req: Request,res: Response): Promise<void> =>{
        try {
           const name = req.query.name

           if (!name) {
               res.statusCode = 400
               throw new Error("name not specified")
           }

           const users = await userModel.selectUsersByName(name as string)
                      
           if(!users.length){
              res.statusCode = 404
              throw new Error("No recipes found")
           }
     
           res.status(200).send(users)
           
        } catch (error) {
           console.log(error)
           res.send(error.message || error.sqlMessage)
        }
     },
     getUsersByType: async(req: Request,res: Response): Promise<void> =>{
        try {
           const type = req.params.type

           if (!type) {
               res.statusCode = 400
               throw new Error("type not specified")
           }

           const users = await userModel.selectUsersByType(type as string)
                      
           if(!users.length){
              res.statusCode = 404
              throw new Error("No recipes found")
           }
     
           res.status(200).send(users)
           
        } catch (error) {
           console.log(error)
           res.send(error.message || error.sqlMessage)
        }
     },
     getAllUsersOrderBy: async(req: Request,res: Response): Promise<void> =>{
        try {
           const orderBy = req.query.orderBy || 'email'
           const order = req.query.order || 'asc'

           const users = await userModel.selectAllUsersOrderBy(order as string, orderBy as string)
                      
           if(!users.length){
              res.statusCode = 404
              throw new Error("No recipes found")
           }
     
           res.status(200).send(users)
           
        } catch (error) {
           console.log(error)
           res.send(error.message || error.sqlMessage)
        }
     },
     getUsersByPage: async(req: Request,res: Response): Promise<void> =>{
      try {
         const page = Number(req.query.page) || 1

         if (isNaN(page)) {
            res.statusCode = 400
            throw new Error("Invalid page, is not a number")
         }

         const users = await userModel.selectAllUsersByPage(page)

         if(!users.length){
            res.statusCode = 404
            throw new Error("No recipes found")
         }

         res.status(200).send({page: {
            previous: `http://localhost:3003/users/pages?page=${page > 1 ? page - 1 : 1}`,
            current: page,
            next: `http://localhost:3003/users/pages?page=${page + 1}`
         }, users})
         
      } catch (error) {
         console.log(error)
         res.send(error.message || error.sqlMessage)
      }
   }
}