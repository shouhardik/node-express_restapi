import {v4 as uuidv4} from 'uuid'

export const getUser=(req,res)=>{
    res.send(users)
}
export const createUser=(req,res)=>{
    const user = req.body

    //const userId=uuidv4()
    const userWithId={...user,id:uuidv4()}
    
    users.push(userWithId)
    res.send(`User with the username ${user.firstName} added to the database!`)
}
