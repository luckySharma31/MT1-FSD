const express = require("express");
const app = express();

let books = [
    {
        id: 1,
        author: "James Clear",
        title: "Atomic Habits",
        category: "Self Help"
    },
    {
        id: 2,
        author: "APJ Abdul Kalam",
        title: "Wings of Fire",
        category: "Biography"
    },
    {
        id: 3,
        author: "Paulo Coelho",
        title: "The Alchemist",
        category: "Fiction"
    }
];

// CREATE
app.post("/books", (req, res) => {
    const newBook = {
        id: 4,
        author: "Robert Kiyosaki",
        title: "Rich Dad Poor Dad",
        category: "Finance"
    };

    books.push(newBook);
    res.send("Book added successfully");
});

// READ
app.get("/books", (req, res) => {
    res.json(books);
});

// UPDATE
app.put("/books", (req, res) => {
    books[0].author = "James Clear";
    books[0].title = "Atomic Habits Updated";
    books[0].category = "Motivation";

    res.send("Book updated successfully");
});

// DELETE 
app.delete("/books", (req, res) => {
    books.pop();
    res.send("Book deleted successfully");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});