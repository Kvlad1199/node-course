import { Router } from 'express';
import { getSeason, getDay, getTimeOfDay } from './utils.mjs';



// Задача 1. Розробити додаток з такими маршрутами:
// Маршрут
// Що повертає
// season
// повертає пору року
// day
// повертає поточний день
// time
// повертає час дня (ранок, обід, вечеря)


const router = Router();
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});
router.get('/season', (req, res) => {
  res.render('index', { title: getSeason() });
});
router.get('/day', (req, res) => {
  res.render('index', { title: getDay() });
});
router.get('/time', (req, res) => {
  res.render('index', { title: getTimeOfDay() });
});

export default router;
