const RegisterActivesController = require('../controllers/RegisterActivesController');

const router = require('express').Router();

router.get('/', RegisterActivesController.init);
router.get('/get_actives/:id', RegisterActivesController.getActivesById);
router.post('/register_actives', RegisterActivesController.registerActives);
router.get('/get_actives', RegisterActivesController.getActives);
router.put('/update_active/:id', RegisterActivesController.updateActive);
router.delete('/delete_active/:id', RegisterActivesController.deleteActive);

module.exports = router;