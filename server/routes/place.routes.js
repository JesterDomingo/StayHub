import express from 'express'
import multer from 'multer';
import placeCtrl from '../controllers/place.controller.js'

const router = express.Router()
const photosMiddleware = multer({dest:"uploads"});

router.route('/api/uploadPhoto/')
  .post(photosMiddleware.array("photos", 100), placeCtrl.uploadPhoto)

  router.route('/api/addNewPlace/')
  .post(placeCtrl.addNewPlace)

  router.get("/api/getPlaces", placeCtrl.getPlaces);

  router.get("/api/places/:id", placeCtrl.getPlaceData);

  router.get("/api/getUserPlaces", placeCtrl.getUserPlaces);

  export default router
