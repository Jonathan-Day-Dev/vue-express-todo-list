import {
    getItems,
    getItemById,
    createItem,
    deleteItemById,
    updateItemById
} from '../models/itemModel.js';

export const showItems = (req, res) => {
    getItems((err, results) => {
        if(err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};

export const showItemById = (req, res) => {
    const { id } = req.params;
    getItemById(id, (err, results) => {
        if(err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};

export const addItem = (req, res) => {
    const data = req.body;
    createItem(data, (err, results) => {
        if(err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};

export const deleteItem = (req, res) => {
    const { id } = req.params;
    deleteItemById(id, (err, results) => {
        if(err) {
            res.send(err);
        } else {
            res.json(results);
        }
    })
}

export const updateItem = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    updateItemById(data, id, (err, results) => {
        if(err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
};