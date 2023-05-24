require('../models/database');
const mongoose = require('mongoose');
const Category = require('../models/Category');
const Car = require('../models/Car');



/**
 * GET / 
 * Homepage
 */
exports.homepage = async(req,res) => {

    try {

        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        const latest = await Car.find({}).sort({_id: -1}).limit(4);
        const rlc = await Car.find({ 'category': 'Red Line Club' }).limit(4);
        const treasureHunt = await Car.find({ 'category': 'Treasure Hunt' }).limit(4);
        const superTreasureHunt = await Car.find({ 'category': 'Super Treasure Hunt' }).limit(4);
        const Mainline = await Car.find({ 'category': 'Mainline' }).limit(4);

        const car = { latest, rlc, treasureHunt, superTreasureHunt, Mainline };



        res.render('index', { title: 'Hot Wheels Collection Guide', categories, car });
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }

}


/**
 * GET /categories
 * Categories
 */
exports.exploreCategories = async(req,res) => {

    try {

        const limitNumber = 20;
        const categories = await Category.find({}).limit(limitNumber);


        res.render('categories', { title: 'Hot Wheels Collections', categories });
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }

}


/**
 * GET /cars:id
 * Car Page
 */
exports.exploreCars = async(req,res) => {

    try {

        let carId = req.params.id;
        const car = await Car.findById(carId);

        console.log(Car.find({sku:'HNL06'}));
        res.render('cars', { title: 'Car Collections', car });

    } catch (error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }

}

// async function updateDymmyCarData(){
//     try {
//         await Car.updateOne( 
//             { sku: "HKG27" },
//             { $set: { colour: "Green" } }
//         );
//     } catch (error) {
//         console.log('err', error)
//     }
// }
// updateDymmyCarData();
