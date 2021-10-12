require('dotenv').config();
server.use(cors());
server.use(express.json());
mongoose.connect('mongodb://localhost:27017/DB_NAME',{ useNewUrlParser: true, useUnifiedTopology: true });
const PORT = process.env.PORT

const {getData, getFavs, AddFav, UpdateFav, DeleteFav} =require('./controllers/Data.controller')
app.get('/data', getData);
app.get('/favs', getFavs);
app.post('/creat-fav', AddFav)
app.put('/update-fav', UpdateFav)
app.delete('/delete-fav', DeleteFav)

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})