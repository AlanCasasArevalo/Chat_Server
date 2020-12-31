const jwt = require('jsonwebtoken')

const jwtGenerator = (uid) => {
   return new Promise(((resolve, reject) => {
       const payload = { uid }
       jwt.sign(payload, process.env.JWT_SECRET_KEY, {
           expiresIn: '24h'
       }, (error, token) => {
           if (error) {
               // no hay token
               reject('JWT not possible to created')
           } else {
               resolve(token)
           }
       })
   }))
}

module.exports = {
    jwtGenerator
}