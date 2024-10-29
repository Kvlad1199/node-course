import { Router } from 'express';

// Задача 2. Розробити серверну частину додатку, який за відповідними маршрутами (“/”, “/coffee”, “/music”) повертає створені HTML документи.

const router = Router();
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});
router.get('/music', (req, res) => {
  res.render('music');
});
router.get('/coffe', (req, res) => {
  res.render('coffe');
});

export default router;
