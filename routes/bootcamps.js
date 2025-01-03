const express = require('express');
const { 
    createBootcamp, 
    deleteBootcamp, 
    getBootcamps, 
    getBootcamp, 
    updateBootcamp ,
    getBootcampsInRadius,
    uploadPhotoBootcamp
} = require('../controllers/bootcamps');

const Bootcamp = require('../models/Bootcamp');

// include other resource routers
const courseRouter = require('./courses');
const reviewRouter = require('./reviews');

const router = express.Router();

const advancedResults = require('../middleware/advancedResults');

const { protect, authorize } = require('../middleware/auth');

// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);

router.use('/:bootcampId/reviews', reviewRouter);

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius)

router
.route('/')
.get(advancedResults(Bootcamp,'courses'),getBootcamps)
.post(protect,authorize('publisher','admin'),createBootcamp);

router
.route('/:id')
.get(getBootcamp)
.put(protect,authorize('publisher','admin'),updateBootcamp)
.delete(protect,authorize('publisher','admin'),deleteBootcamp);

router.route('/:id/photo').put(protect,authorize('publisher','admin'),uploadPhotoBootcamp)

module.exports = router