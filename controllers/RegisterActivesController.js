const Active = require('../models/ActivesModel');

module.exports = class RegisterActivesController {
    static async init(req, res) {
        res.send({ message: 'Hello World' });
    }

    static async registerActives(req, res) {
        const { hostname, equipmentType, model, manufacturer, serialNumber, userName, status } = req.body;

        const active = new Active({
            hostname,
            equipmentType,
            model,
            manufacturer,
            serialNumber,
            userName,
            status
        });

        try {
            await active.save();
            res.send({ message: 'Active registered successfully', active });
        } catch (err) {
            res.status(500).send('Error registering active');
        }
    }

    static async getActives(req, res) {
        try {
            const actives = await Active.find({});
            res.json(actives);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    static async updateActive(req, res) {
        const { id } = req.params;
        const updateData = req.body;

        try {
            const updatedActive = await Active.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
            if (!updatedActive) {
                return res.status(404).send('Active not found');
            }
            res.send({ message: 'Active updated successfully', updatedActive });
        } catch (err) {
            res.status(500).send('Error updating active');
        }
    }

    static async deleteActive(req,res){
        const { id } = req.params;

        try {
            const deletedActive = await Active.findByIdAndDelete(id);
            if (!deletedActive) {
                return res.status(404).send('Active not found');
            }
            res.send({ message: 'Active deleted successfully', deletedActive });
        } catch (err) {
            res.status(500).send('Error deleting active');
        }
    }

    static async getActivesById(req, res) {
        const { id } = req.params;

        try {
            const active = await Active.findById(id);
            console.log(active);
            if (!active) {
                return res.status(404).send('Active not found');
            }
            res.json(active);
        } catch (err) {
            res.status(500).send('Error getting active');
        }
    }
}
