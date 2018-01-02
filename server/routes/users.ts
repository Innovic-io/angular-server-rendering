import { Router } from 'express';

const router = Router();

router.get('/users', ((req, res) => {

  return res.json([
    {
      user: 'Ana',
      age: 25
    },
    {
      user: 'John',
      age: 26
    }
  ]);
}));

export default router;
