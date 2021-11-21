import express from 'express';

import {
    showItems,
    showItemById,
    addItem,
    deleteItem,
    updateItem
} from '../controllers/items.js';

const router = express.Router();

router.get('/items', showItems);
router.get('/item/:id', showItemById);
router.post('/item', addItem);
router.delete('/item/:id', deleteItem);
router.put('/item/:id', updateItem);

export default router;