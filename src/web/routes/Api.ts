import { Router } from 'express';
import HomeController from '../controllers/HomeController';

const router = Router();

// Controllers
// router.get("/*", (req, res) => {
//     res.render("index");
// });

router.get("/test", (req, res) => {
    console.log(res.json({key: 'tsad'}));
    // res.render("index");
});

router.get('/Home', HomeController.index);


export default router;