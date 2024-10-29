import { Router } from 'express';

const router = Router();
router.get('/', (req, res) => {
  res.render('index', { title: 'User' });
});
router.get('/goals', (req, res) => {
  res.render('goals');
});
router.get('/about', (req, res) => {
  res.render('about');
});
router.get('/news', (req, res) => {
  res.render('news');
});
router.get('/info/:myLinks', (req, res) => {
  res.render(`${req.params['myLinks']}`);
});

export default router;
