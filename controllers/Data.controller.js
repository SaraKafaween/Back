'use strict';
const { title } = require('process');
const Language = require('../Models/Data.model')

const getData = async (req, res) => {
    let result = axios.get(`${process.env.LANGUAGES_API}`)
    res.status(200) = await json(result)
}

const getFavs = async (req, res) => {
    res.status(200) = await json(favs)
}

const AddFav = async (req, res) => {
    favs.findOne(title).then(

        res.status(200) = await json(favs)
    )
    favs.save()
}

const UpdateFav = async (req, res) => {
    favs.findOneAndUpdate().then(
        title=req.params.title,
        res.status(200) = await json(favs)
    )
    favs.save()
}

const DeleteFav = async (req, res) => {
    let title = req.params.title

    favs.findByIdAndDelete(title).then(
        res.status(200) = await json(favs)
    )
    favs.save()
}

module.exports = {
    getData,
    getFavs,
    AddFav,
    UpdateFav,
    DeleteFav
}