const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

//middleware
app.use(cors());
app.use(express.json());
 



app.get('/', (req, res) => {
  res.send('Hello World!')
})


//mongodb configuration

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://event-admin:Star_Platinum_69@eventexp.ihhjner.mongodb.net/?retryWrites=true&w=majority&appName=EventEXP";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create a collection for documents
    const eventCollections = client.db("EventInventory").collection("events");

    //insert a event to the db : post method
    app.post("/upload-event", async(req, res)=>{
        const data = req.body;
        const result = await eventCollections.insertOne(data);
        res.send(result);
    })


    //get all events from database
    app.get("/all-events", async(req, res)=>{
        const events = eventCollections.find();
        const result = await events.toArray();
        res.send(result);
    })

    //update a event data: patch or update method
    app.patch("/event/:id",async(req, res) =>{
        const id = req.params.id;
        //console.log(id);
        const updateEventData = req.body;
        const filter = {_id: new ObjectId(id)};
        const options = {upsert:true};

        const updateDoc = {
            $set:{
                ...updateEventData
            }
        }

        //update
        const result = await eventCollections.updateOne(filter, updateDoc, options);
        res.send(result);
    })

    app.delete("/event/:id", async(req,res)=>{
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)};
        const result = await eventCollections.deleteOne(filter);
        res.send(result);
    })
    
    //find by category
    app.get("/all-events", async(req, res)=>{
        let query = {};
        if(req.query?.category){
            query ={category: req.query.category}
        }
        const result = await eventCollections.find(query).toArray();
        res.send(result);
    })

      //to get SingleEvent data
      app.get("/event/:id", async(req, res)=> {
        const id =req.params.id;
        const filter = {_id: new ObjectId(id)};
        const result = await eventCollections.findOne(filter);
        res.send(result)
      })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})