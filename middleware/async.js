//Note i didnt use this middleware for the project 
// it is a middleware for the try and catch in the controllers
// you have to wrap the controllers with this by just adding
// asyncwrapper()then remove the try and catch words, also remove the catch err 
//but keep the try own
const asyncwrapper = (fn) =>{
     return async(req,res,next) =>{
        try {
            await fn(req,res,next)
        } catch (error) {
            next(error)
        } 
     }
}


module.exports = asyncwrapper