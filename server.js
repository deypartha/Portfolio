const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'Components'));
app.use(express.static(path.join(__dirname, 'Components', 'public')));
app.set('view engine', 'ejs'); // Corrected this line
app.get('/index', (req, res) => {
    const socialLinks = {
        facebook: '',
        twitter: 'https://x.com/home?lang=en',
        instagram: 'https://www.instagram.com/',
        linkedin: 'https://www.linkedin.com/in/partha-dey-b418b4302/',
        github: 'https://github.com/deypartha'

    };
    // res.render('index', { socialLinks });
    res.render("index", { 
        socialLinks,
        photoSrc: "/partha.png", 
        altText: "Partha Dey" ,
        photoS: "/photo2.png",
        altT: "Partha Dey",
        project1: "/project1.png",
        project2: "/project2.png",
        project3: "/project3.png",
        project4: "https://bibhas-portfolio.netlify.app/static/media/icon5.5c1c334afa9a51bfb03b.png",
        project5: "/touch.png",
    });
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
