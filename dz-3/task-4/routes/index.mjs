import { Router } from 'express';

// Задача 4. З використанням роутерів та шаблонізаторів розробити інтернет магазин з такими сторінками:
// 1) about – як статична сторінка (розмістити у public)
// 2) сторінка додавання продукту (поки лише відображаємо поля для заповнення інформації)
// 3) сторінка відображення продуктів (у формі таблиці і списку)
// 4) головна – знаходяться посилання на сторінки about і products і addproducts

const router = Router();
router.get('/', (req, res) => {
  res.render('index');
});
router.get('/products', (req, res) => {
  res.render('products');
});
router.get('/add-products', (req, res) => {
  res.render('add-products');
});

export default router;
