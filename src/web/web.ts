import Express from './providers/Express';

// // Express app initialization
// const app = express();

// // Template configuration
// app.set("view engine", "ejs");
// app.set("views", "public");

// // Static files configuration
// app.use("/assets", express.static(path.join(__dirname, "frontend")));

// // Controllers
// app.get("/*", (req, res) => {
//     res.render("index");
// });

// Start function
export const loadServer = (): void => {
    // const server = http.createServer(app);

    // return new Promise<void>((resolve, reject) => {
    //     Express.init();
    // });

    Express.init();
};
