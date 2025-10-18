import express from 'express';
import cors from 'cors';
const app= express();
app.use(cors()); // 🧠 ye line CORS policy ko allow karti hai

app.use(express.json());

let users = [
    {id:1, name: 'ali husnain'},
    {id:2, name: 'khan '}

];

app.get('/users', (req,res)=>{
    res.json(users);
});

// add users
app.post('/users', (req,res)=>{
    const newUser = req.body;
    users.push(newUser);
    res.json({
        message: ' user add successfully',
        allUsers: users
    });
});

  // Delete users
  app.delete( '/users/:id',(req,res)=> {
    const userId= parseInt(req.params.id);
    users = users.filter(u => u.id !== userId);
    res.json({
        message: `User ${userId} deleted`,
         allUsers: users
    });
  });


// DELETE ALL USERS
app.delete('/users', (req, res) => {
  users = []; // empty the array
  res.json({
    message: '💣 All users deleted successfully!',
    allUsers: users
  });
});



  app.listen(3000, () => {
  console.log('✅ Server running on http://localhost:3000');
});
