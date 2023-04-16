const db = require ('../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        db.Movie.findAll()
        .then((movies) =>{
            return res.render('moviesList', {movies})
        })
    },
    detail: (req, res) => {
        db.Movie.findByPk(req.params.id)
        .then((movie) => {
            return res.render('moviesDetail', {movie})
        })
    },
    new: (req, res) => {
        db.Movie.findAll({
            order: [
                ['release_date', 'DESC']
            ]
        }).then((movies)=> {
            return res.render('newestMovies', {movies})
        })
    },
    recommended: (req, res) => {
        db.Movie.findAll({
            where: {
                rating: {[Op.gte]: 8}
            },
            order: [
                ['rating', 'DESC']
            ],
            limit: 5,
        }).then((movies)=> {
            return res.render('recommendedMovies', {movies})
        })
    }
}