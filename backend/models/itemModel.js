import db from '../config/database.js';

const GET_ALL_ITEMS = 'SELECT * FROM items';
const GET_ITEM_BY_ID = 'SELECT * FROM items WHERE id = ?';
const CREATE_ITEM = 'INSERT INTO items SET ?';
const UPDATE_ITEM = 'UPDATE items SET title = ?, description = ? WHERE id = ?';
const DELETE_ITEM = 'DELETE FROM items WHERE id = ?';

const getResult = (q, result, data=undefined) => {
    db.query(q, [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
}

export const getItems = result => {
    getResult(GET_ALL_ITEMS, result);
}

export const getItemById = (id, result) => {
    getResult(GET_ITEM_BY_ID, result, id);
}

export const createItem = (data, result) => {
    getResult(CREATE_ITEM, result, data);
}

export const deleteItemById = (id, result) => {
    getResult(DELETE_ITEM, result, id);
}

export const updateItemById = (data, id, result) => {
    db.query(UPDATE_ITEM, [data.title, data.description, id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
