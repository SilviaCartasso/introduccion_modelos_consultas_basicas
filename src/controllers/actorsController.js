const db = require ('../database/models')
const Op = db.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        db.Actor.findAll()
        .then((actors) =>{
            return res.render('actorsList', {actors})
        })
    },
    detail: (req, res) => {
        db.Actor.findByPk(req.params.id)
        .then((actor) => {
            return res.render('actorDetail', {actor})
        })
    },
    top: (req, res) => {
        db.Actor.findAll({
            order: [
                ['rating', 'DESC']
            ],
            limit: 10,
        }).then((actors)=> {
            return res.render('topActors', {actors})
        })
    }
}