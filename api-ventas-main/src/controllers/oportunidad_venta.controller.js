import Oportunidad_de_venta from '../models/oportunidad_venta.model.js';

// Create
const create = async (req, res) => {
    try {
        const oportunidad_venta = await Oportunidad_de_venta.create(req.body);
        res.status(201).send(oportunidad_venta);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Read
const findAll = async (req, res) => {
    try {
        const oportunidades_venta = await Oportunidad_de_venta.findAll();
        res.send(oportunidades_venta);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Read by ID
const findOne = async (req, res) => {
    try {
        const oportunidad_venta = await Oportunidad_de_venta.findByPk(req.params.id);
        if (oportunidad_venta) {
            res.send(oportunidad_venta);
        } else {
            res.status(404).send({ message: 'No se encontró la Oportunidad de Venta con el ID especificado.' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

//update
const update = async (req, res) => {
    try {
        await Oportunidad_de_venta.update(req.body, {
            where: { id: req.params.id }
        });
        res.send({ message: 'Oportunidad_de_venta was updated successfully.' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Delete
const deleted = async (req, res) => {
    try {
        await Oportunidad_de_venta.destroy({
            where: { id: req.params.id }
        });
        res.send({ message: 'Oportunidad_de_venta was deleted successfully.' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export default {
    create,
    findAll,
    findOne,
    update,
    deleted
};