const fs = require('fs');
const https = require('https');

https.get('https://losninosdelviento.fundacionred.org/', (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        // Simple regex extraction for headings and paragraphs
        const headings = data.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/g) || [];
        const paragraphs = data.match(/<p[^>]*>(.*?)<\/p>/g) || [];
        
        console.log("=== HEADINGS ===");
        headings.forEach(h => console.log(h.replace(/<[^>]+>/g, '').trim()));
        
        console.log("\n=== PARAGRAPHS ===");
        paragraphs.forEach(p => {
            let text = p.replace(/<[^>]+>/g, '').trim();
            if(text.length > 20) console.log(text);
        });
    });
}).on("error", (err) => {
    console.log("Error: " + err.message);
});
